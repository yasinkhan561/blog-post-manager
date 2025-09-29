import styled from "styled-components";
import defaultTheme, {
  Breakpoint,
  ColorKey,
  Spacing,
  TextSize,
  TextWeight,
} from "~/theme/defaultTheme";

interface ErrorPageButtonProps {
  $secondary?: boolean;
}

export const StyledErrorPage = styled.div`
  background-color: ${ColorKey.white};
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${Spacing.xs};
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${Spacing.xxxl};
  margin: 4rem ${Spacing.none};

  @media (${Breakpoint.forPhoneOnly}) {
    flex-direction: column;
    gap: ${Spacing.none};
    margin: ${Spacing.md} ${Spacing.none};
  }
`;

export const StyledImageWrapper = styled.div`
  width: 38.8rem;
  max-width: 100%;
  padding: ${Spacing.none} ${Spacing.xxs} ${Spacing.xxs} ${Spacing.xxs};

  img {
    object-fit: contain;
    display: block;
    width: 100%;
    max-width: 100%;
  }
`;

export const StyledErrorTitle = styled.label`
  font-size: 3rem;
  color: ${defaultTheme.colors[ColorKey.primaryTextColor]};
  font-weight: ${TextWeight.semiBold};
  text-align: center;
  padding: ${Spacing.none};
  margin-bottom: ${Spacing.xxl};
`;

export const StyledErrorMessage = styled.label`
  font-size: ${TextSize.xl};
  color: ${defaultTheme.colors[ColorKey.primaryTextColor]};
  font-weight: ${TextWeight.regular};
  text-align: center;
  padding: ${Spacing.none} ${Spacing.xs};
`;

export const StyledErrorPageButton = styled.button<ErrorPageButtonProps>`
  position: relative;
  border-radius: 40px;
  border: none;
  padding: ${Spacing.buttonPadding};

  white-space: nowrap;
  font-size: ${TextSize.xl};
  min-width: 15rem;
  max-width: 25rem;
  color: ${ColorKey.white};

  background-color: ${({ $secondary }) =>
    $secondary
      ? defaultTheme.colors[ColorKey.secondaryButton]
      : defaultTheme.colors[ColorKey.primaryButton]};

  overflow: visible;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:focus-visible {
    &:before {
      content: "";
      position: absolute;
      top: -3px;
      left: -3px;
      z-index: 0;
      height: calc(100% + 6px);
      width: calc(100% + 6px);
      border-radius: 42px;
      border-width: 2px;
      border-style: solid;
      border-color: ${({ $secondary }) =>
        $secondary
          ? defaultTheme.colors[ColorKey.secondaryButton]
          : defaultTheme.colors[ColorKey.primaryButton]};
      overflow: visible;
    }
  }
  @media (${Breakpoint.forPhoneOnly}) {
    margin: ${Spacing.xxs};
  }
`;
