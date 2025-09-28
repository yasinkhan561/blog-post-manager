import React, { TextareaHTMLAttributes } from "react";
import { StyledTextFieldWrapper } from "../textField/TextFieldStyles";
import { StyledTextareaComponent } from "./TextAreaStyles";
import { StyledLabel, StyledErrorMessage } from "../FormElementStyles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const TextArea = ({
  label,
  name,
  error,
  rows = 5,
  ...restProps
}: TextareaProps) => {
  return (
    <StyledTextFieldWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledTextareaComponent
        id={name}
        name={name}
        rows={rows}
        $hasError={!!error}
        {...restProps}
      />

      <StyledErrorMessage $hasError={!!error}>
        {error ? error : "\u00a0"}
      </StyledErrorMessage>
    </StyledTextFieldWrapper>
  );
};

export default TextArea;
