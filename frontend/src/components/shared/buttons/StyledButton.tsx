import styled from "styled-components";
import {
  BorderRadius,
  ColorKey,
  Spacing,
  TextSize,
  TextWeight,
} from "@/theme/defaultTheme";

interface ButtonProps {
  $backgroundColor?: string;
  $secondary?: boolean;
  $tertiary?: boolean;
  $wrapWhiteSpace?: boolean;
  $iconButton?: boolean;
  $marginBottom?: string | number;
}

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: ${({ $marginBottom }) => $marginBottom ?? "0"};

  border: ${Spacing.none};
  border-radius: ${BorderRadius.button};
  padding: ${Spacing.buttonPadding};
  min-width: 10rem;
  font-size: ${TextSize.sm};
  font-weight: ${TextWeight.semiBold};
  line-height: ${TextSize.xl};
  text-overflow: ellipsis;
  white-space: ${({ $wrapWhiteSpace }) =>
    $wrapWhiteSpace ? "normal" : "nowrap"};

  color: ${({ theme }) => theme.colors[ColorKey.primaryButtonText]};
  background-color: ${({ theme, $backgroundColor = ColorKey.primaryButton }) =>
    theme.colors[$backgroundColor]};

  overflow: visible;

  @media (hover: none) and (pointer: coarse) {
    padding: ${Spacing.normalButtonPaddingTouch};
    border-radius: ${BorderRadius.mobileButton};
  }

  -webkit-tap-highlight-color: rgba(255, 255, 255, 0.6);

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 0.7;
    }
  }

  ${({ $secondary, theme }) =>
    $secondary &&
    `
    background-color: ${theme.colors[ColorKey.secondaryButton]};
  `}

  ${({ $tertiary, theme }) =>
    $tertiary &&
    `
     background-color: ${theme.colors[ColorKey.tertiaryButton]};
  `}

  ${({ $iconButton }) => $iconButton && `gap: ${Spacing.xs}`}
`;

export default StyledButton;
