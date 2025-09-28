import styled from "styled-components";
import { BorderRadius, ColorKey, TextSize } from "@/theme/defaultTheme";

interface TextareaStylesProps {
  $hasError?: boolean;
}

export const StyledTextareaComponent = styled.textarea<TextareaStylesProps>`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: ${TextSize.sm}
  line-height: 1.5;
  resize: vertical;

  border: 1px solid ${({ theme }) => theme.colors[ColorKey.borderColor]};
  border-radius:  ${BorderRadius.button};
  background-color:${({ theme }) => theme.colors[ColorKey.white]};
  color: ${({ theme }) => theme.colors[ColorKey.primaryTextColor]};
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors[ColorKey.placeholder]};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors[ColorKey.focusedInput]};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }

  &:disabled {
    background-color: ${({ theme }) =>
      theme.colors[ColorKey.disabledBackground]};
    color: ${({ theme }) => theme.colors[ColorKey.disabled]};
    cursor: not-allowed;
  }

  ${({ $hasError, theme }) =>
    $hasError &&
    `
      border-color: ${theme.colors.danger};
      box-shadow: 0 0 0 1px ${theme.colors.danger};
    `}
`;
