import React from "react";
import { StyledTextFieldWrapper } from "./TextFieldStyles";
import {
  StyledLabel,
  StyledErrorMessage,
  StyledInput,
} from "../FormElementStyles";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const TextField = ({
  label,
  name,
  type = "text",
  error,
  ...restProps
}: TextFieldProps) => {
  return (
    <StyledTextFieldWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        id={name}
        name={name}
        type={type}
        $hasError={!!error}
        {...restProps}
      />
      {
        <StyledErrorMessage $hasError={!!error}>
          {error ? error : "\u00a0"}
        </StyledErrorMessage>
      }
    </StyledTextFieldWrapper>
  );
};

export default TextField;
