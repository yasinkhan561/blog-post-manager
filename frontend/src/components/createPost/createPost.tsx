import React, { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { createPostAction } from "@/redux/posts/actionCreators";
import { useNavigate } from "react-router-dom";
import Loader, { Spinner } from "@/components/shared/Loader";
import StyledButton from "@/components/shared/buttons/StyledButton";
import MessageBanner from "@/components/shared/messageBanner/MessageBanner";
import MessageType from "@/constants/MessageType";
import {
  StyledButtonContainer,
  StyledCreatePostSection,
  StyledPageTitle,
} from "./createPostStyles";
import TextField from "@/components/shared/form/textField/TextField";
import TextArea from "@/components//shared/form/textArea/TextArea";
import FileUpload from "@/components/shared/form/fileInput/FileUpload";
import { validateTextField } from "@/utils/formHelper";
import { FieldNameKey } from "@/constants/common";

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
// Removed ApiErrors type

const CreatePost = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const isLoading = useSelector((state: RootState) => state.posts.isLoading);
  // This isError state will now handle all generic API failures
  const isError = useSelector((state: RootState) => state.posts.isError);

  const [formData, setFormData] = useState<LocalFormState>(initialFormState);
  const [clientErrors, setClientErrors] = useState<Partial<FormErrors>>({});
  const [haveValidationError, setHaveValidationError] = useState(false);

  const getFieldError = (field: keyof LocalFormState): string | undefined => {
    return clientErrors[field];
  };

  const handleChange = (
    field: keyof LocalFormState,
    value: string | undefined | null
  ) => {
    // Only clear the specific client error on change
    setClientErrors((prev) => ({ ...prev, [field]: undefined }));

    setFormData((prev) => ({ ...prev, [field]: value as any }));
  };

  const handleImageSelect = (file: File | null) => {
    // Use the same logic as handleChange to clear errors
    setClientErrors((prev) => ({ ...prev, image: undefined }));

    // 💡 Direct, explicit state update for the image field
    setFormData((prev) => ({ ...prev, image: file || undefined }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const field = e.target.name as FieldNameKey;
    const value = e.target.value;

    if (field === "title" || field === "content" || field === "author") {
      const error = validateTextField(field, value);

      // 1. Calculate the NEW total errors state
      setClientErrors((prev) => {
        // Create the new errors object for the next state
        const newErrors = {
          ...prev,
          [field]: error || undefined,
        };

        // Clean up undefined/null values to accurately count remaining errors
        const validKeys = Object.keys(newErrors).filter(
          (k) => newErrors[k as keyof LocalFormState]
        );

        // 2. Update the button state based on the calculated new errors
        setHaveValidationError(validKeys.length > 0);

        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: Partial<FormErrors> = {};
    const { title, content, author } = formData;

    const titleError = validateTextField("title", title);
    if (titleError) errors.title = titleError;

    const contentError = validateTextField("content", content);
    if (contentError) errors.content = contentError;

    const authorError = validateTextField("author", author);
    if (authorError) errors.author = authorError;

    setHaveValidationError(Object.keys(errors).length > 0);

    setClientErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const payload = new FormData();
    payload.append("title", formData.title);
    payload.append("content", formData.content);
    payload.append("author", formData.author);

    if (formData.image) {
      payload.append("image", formData.image);
    }

    console.log("--- FormData Contents ---");
    for (const [key, value] of payload.entries()) {
      if (value instanceof File) {
        console.log(
          `${key}: File Name=${value.name}, Type=${value.type}, Size=${value.size} bytes`
        );
      } else {
        console.log(`${key}: ${value}`);
      }
    }

    const result: any = await dispatch(createPostAction(payload as any));

    if (result.success) {
      // Success: Clear form and navigate
      setFormData(initialFormState);
      setClientErrors({});
      (e.target as HTMLFormElement).reset();
      navigate("/");
    } else {
      // 💡 SIMPLIFIED: On any failure (validation, network, etc.)
      // Clear client errors to remove stale messages, and rely on the
      // Redux 'isError' state to show the generic failure banner.
      setClientErrors({});
      // The Redux action creator is responsible for setting the global isError state.
    }
  };

  return (
    <StyledCreatePostSection
      as="form"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <StyledPageTitle>Create Post</StyledPageTitle>

      {/* 💡 This banner now handles ALL generic submission failures */}
      {isError && (
        <MessageBanner type={MessageType.ERROR}>
          Something went wrong. Please try again.
        </MessageBanner>
      )}

      {/* Inputs now use the onBlur handler */}
      <TextField
        label="Title"
        name="title"
        value={formData.title}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleChange("title", e.target.value)
        }
        onBlur={handleBlur}
        placeholder="Enter post title"
        error={getFieldError("title")}
      />
      <TextArea
        placeholder="Content"
        label="Content"
        name="content"
        value={formData.content}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          handleChange("content", e.target.value)
        }
        onBlur={handleBlur}
        error={getFieldError("content")}
      />
      <TextField
        label="Author"
        name="author"
        value={formData.author}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleChange("author", e.target.value)
        }
        onBlur={handleBlur}
        placeholder="Enter author name"
        error={getFieldError("author")}
      />
      <FileUpload
        label="Upload Post Image"
        onFileSelect={handleImageSelect}
        error={getFieldError("image")}
      />
      <StyledButtonContainer>
        <StyledButton
          type="reset"
          disabled={isLoading}
          $secondary
          onClick={() => {
            navigate("/");
          }}
        >
          {"Cancel"}
        </StyledButton>
        <StyledButton type="submit" disabled={isLoading || haveValidationError}>
          {isLoading ? <Spinner /> : "Create Post"}
        </StyledButton>
      </StyledButtonContainer>
    </StyledCreatePostSection>
  );
};

export default CreatePost;
