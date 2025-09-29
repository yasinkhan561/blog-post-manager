import { useState, useEffect, useCallback } from "react";
import { validateTextField } from "@/utils/formHelper"; // Import shared utility
import { FieldNameKey } from "@/constants/common"; // Import shared constant

// 💡 Placeholder definition for Post (replace with your actual type if stored elsewhere)
interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  image_url: string | null | undefined;
}

interface LocalFormState {
  title: string;
  content: string;
  author: string;
  image: File | undefined;
}

const initialFormState: LocalFormState = {
  title: "",
  content: "",
  author: "",
  image: undefined,
};

type FormErrors = Record<keyof LocalFormState, string>;

interface UsePostFormResult {
  formData: LocalFormState;
  clientErrors: Partial<FormErrors>;
  haveValidationError: boolean;
  setClientErrors: React.Dispatch<React.SetStateAction<Partial<FormErrors>>>;
  getFieldError: (field: keyof LocalFormState) => string | undefined;
  handleChange: (
    field: keyof LocalFormState,
    value: string | undefined | null
  ) => void;
  handleImageSelect: (file: File | null) => void;
  handleBlur: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  validateForm: () => boolean;
  resetForm: () => void;
}

export const usePostForm = (initialPost?: Post): UsePostFormResult => {
  const [formData, setFormData] = useState<LocalFormState>(initialFormState);
  const [clientErrors, setClientErrors] = useState<Partial<FormErrors>>({});
  const [haveValidationError, setHaveValidationError] = useState(true);

  // Validation Logic (for internal use by useEffect)
  const validateFormInternal = useCallback((data: LocalFormState): boolean => {
    const errors: Partial<FormErrors> = {};
    const { title, content, author } = data;

    const titleError = validateTextField("title", title);
    if (titleError) errors.title = titleError;

    const contentError = validateTextField("content", content);
    if (contentError) errors.content = contentError;

    const authorError = validateTextField("author", author);
    if (authorError) errors.author = authorError;

    return Object.keys(errors).length === 0;
  }, []);

  // --- Initialization (Runs when initialPost changes) ---

  useEffect(() => {
    if (initialPost) {
      // 1. Set initial data from the fetched post for editing
      const initialData: LocalFormState = {
        title: initialPost.title,
        content: initialPost.content,
        author: initialPost.author,
        image: undefined,
      };
      setFormData(initialData);

      // 2. Check initial validity
      setHaveValidationError(!validateFormInternal(initialData));
    } else {
      // For Create component (initialPost is undefined)
      setFormData(initialFormState);
      setHaveValidationError(true);
    }
  }, [initialPost, validateFormInternal]);

  // --- Handlers ---

  const getFieldError = useCallback(
    (field: keyof LocalFormState): string | undefined => {
      return clientErrors[field];
    },
    [clientErrors]
  );

  const handleChange = useCallback(
    (field: keyof LocalFormState, value: string | undefined | null) => {
      setClientErrors((prev) => ({ ...prev, [field]: undefined }));
      setFormData((prev) => ({ ...prev, [field]: value as any }));
    },
    []
  );

  const handleImageSelect = useCallback((file: File | null) => {
    setClientErrors((prev) => ({ ...prev, image: undefined }));
    setFormData((prev) => ({ ...prev, image: file || undefined }));
  }, []);

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const field = e.target.name as FieldNameKey;
      const value = e.target.value;

      if (field === "title" || field === "content" || field === "author") {
        const error = validateTextField(field, value);

        setClientErrors((prev) => {
          const newErrors = {
            ...prev,
            [field]: error || undefined,
          };

          const validKeys = Object.keys(newErrors).filter(
            (k) => newErrors[k as keyof LocalFormState]
          );
          setHaveValidationError(validKeys.length > 0);

          return newErrors;
        });
      }
    },
    []
  );

  // --- Exposed Submission Logic ---

  // Used by the submit handler to finalize validation and display errors
  const validateForm = useCallback((): boolean => {
    const { title, content, author } = formData;
    const errors: Partial<FormErrors> = {};

    const titleError = validateTextField("title", title);
    if (titleError) errors.title = titleError;

    const contentError = validateTextField("content", content);
    if (contentError) errors.content = contentError;

    const authorError = validateTextField("author", author);
    if (authorError) errors.author = authorError;

    // Update state for visual feedback
    setClientErrors(errors);
    const isValid = Object.keys(errors).length === 0;
    setHaveValidationError(!isValid);

    return isValid;
  }, [formData]);

  const resetForm = useCallback(() => {
    setFormData(initialFormState);
    setClientErrors({});
    setHaveValidationError(true);
  }, []);

  return {
    formData,
    clientErrors,
    haveValidationError,
    setClientErrors,
    getFieldError,
    handleChange,
    handleImageSelect,
    handleBlur,
    validateForm,
    resetForm,
  };
};
