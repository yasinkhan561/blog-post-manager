import React, { useState, useEffect } from "react";
import { StyledFileUpload, StyledPreview } from "./FileUploadStyles";
import {
  StyledLabel,
  StyledInput,
  StyledErrorMessage,
} from "../FormElementStyles";

import noImagePlaceholder from "@/assets/images/no-image-placeholder.svg";

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
  initialPreview?: string;
  accept?: string;
  label?: string;
  error?: string;
}

const FileUpload = ({
  onFileSelect,
  initialPreview,
  accept = "image/*",
  label = "Upload Image",
  error,
}: FileUploadProps) => {
  const [preview, setPreview] = useState<string | null>(initialPreview || null);
  const placeholderImageUrl = noImagePlaceholder;

  useEffect(() => {
    if (initialPreview) setPreview(initialPreview);
  }, [initialPreview]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (preview && preview.startsWith("blob:")) {
      URL.revokeObjectURL(preview);
    }

    if (file) {
      setPreview(URL.createObjectURL(file));
      onFileSelect(file);
    } else {
      setPreview(null);
      onFileSelect(null);
    }
  };

  return (
    <StyledFileUpload>
      {label && <StyledLabel>{label}</StyledLabel>}

      <StyledInput
        type="file"
        accept={accept}
        onChange={handleChange}
        $hasError={!!error}
      />

      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}

      {preview && (
        <StyledPreview>
          <img
            src={preview}
            alt="Preview"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = placeholderImageUrl;
            }}
          />
        </StyledPreview>
      )}
    </StyledFileUpload>
  );
};

export default FileUpload;
