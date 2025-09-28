import styled from "styled-components";
import {
  BorderRadius,
  ColorKey,
  Spacing,
  TextSize,
  TextWeight,
} from "@/theme/defaultTheme";

interface SharedInputStylesProps {
  $hasError?: boolean;
}

export const StyledLabel = styled.label`
  font-size: 0.9rem;
  font-weight: ${TextWeight.medium};
  color: ${({ theme }) => theme.colors[ColorKey.primaryTextColor]};
  display: block;
  font-size: ${TextSize.sm};
  margin-bottom: ${Spacing.xxs};
  white-space: normal;
`;

export const StyledInput = styled.input<SharedInputStylesProps>`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: ${TextSize.md};
  border: 1px solid ${({ theme }) => theme.colors[ColorKey.borderColor]};
  border-radius: ${BorderRadius.button};
  background-color: #fff;
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
      border:  2px solid ${theme.colors.danger};
    `}
`;

export const StyledErrorMessage = styled.span<SharedInputStylesProps>`
  font-size: ${TextSize.xs};
  position: absolute;
  top: calc(100% + 1px);
  padding-left: ${Spacing.xs};
  color: ${({ theme, $hasError }) =>
    theme.colors[$hasError ? ColorKey.danger : ColorKey.transparent]};
  font-weight: ${TextWeight.semiBold};
  user-select: none;
`;
