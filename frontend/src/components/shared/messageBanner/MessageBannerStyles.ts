import styled, { css } from "styled-components";
import StyledButton from "@/components/shared/buttons/StyledButton";
import {
  Breakpoint,
  ColorKey,
  Spacing,
  TextSize,
  TextWeight,
} from "@/theme/defaultTheme";
import { ANIMATION_SPEED } from "@/constants/common";

export interface StyledMessageBannerProps {
  $backgroundColor?: string;
  $isVisible?: boolean;
  $isStackable?: boolean;
}

interface StyledMessageBannerWrapperProps {
  $isVisible?: boolean;
}

export const StyledMessageBannerWrapper = styled.div<StyledMessageBannerWrapperProps>`
  display: grid;
  grid-template-rows: 0fr;

  ${({ $isVisible }) =>
    $isVisible
      ? css`
          transition: grid-template-rows ${ANIMATION_SPEED}s ease-in-out;
          grid-template-rows: 1fr;
        `
      : ""}

  transition: grid-template-rows ${ANIMATION_SPEED}s ease-in-out;
`;

export const StyledMessageBanner = styled.div<StyledMessageBannerProps>`
  ${({ $isStackable }) =>
    $isStackable
      ? css`
          margin-bottom: 0.1rem;
        `
      : css`
          position: absolute;
          top: 0;
          z-index: 2;
        `}

  background-color: ${({ $backgroundColor, theme }) =>
    $backgroundColor
      ? theme.colors[$backgroundColor]
      : theme.colors[ColorKey.danger]};

  width: 100%;
  transition: width ${ANIMATION_SPEED}s ease-in-out;
  overflow: hidden;
`;

export const StyledMessageBannerContainer = styled.div<StyledMessageBannerProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: ${Spacing.xs};
  padding: ${Spacing.xs} ${Spacing.xxs} ${Spacing.xs} ${Spacing.xs};

  ${({ $isVisible }) => css`
    opacity: ${$isVisible ? 1 : 0};
  `}
`;

export const StyledMessageBannerButtonsContainer = styled.div`
  display: flex;
  text-align: start;
  align-items: center;
  column-gap: 1.8rem;
  row-gap: ${Spacing.sm};
  flex-wrap: wrap;
`;

export const StyledMessageBannerContent = styled(
  StyledMessageBannerButtonsContainer
)`
  flex: 1;
  align-self: center;
  color: ${({ theme }) => theme.colors[ColorKey.white]};
`;

export const StyledMessageBannerMessage = styled.p`
  margin: ${Spacing.none};
  font-weight: ${TextWeight.regular};
  font-size: ${TextSize.sm};
  line-height: 1.7rem;

  @media (${Breakpoint.forTabletPortraitDown}) {
    line-height: 1.9rem;
  }
`;

export const StyledMessageBannerButton = styled.button`
  background-color: ${({ theme }) => theme.colors[ColorKey.transparent]};
  color: ${({ theme }) => theme.colors[ColorKey.white]};
  border: none;
  outline: none;
  padding: ${Spacing.none};
  font-weight: ${TextWeight.bold};
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  -webkit-tap-highlight-color: transparent;

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }

  @media (${Breakpoint.forTabletPortraitDown}) {
    padding: ${Spacing.none};
  }
`;

export const StyledMessageBannerCloseButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors[ColorKey.transparent]};
  transition: none;
  min-width: 3rem;
  padding: ${Spacing.none};

  @media (${Breakpoint.forTabletPortraitUp}) {
    align-self: center;
  }

  @media (hover: hover) {
    &:hover {
      opacity: 0.7;
    }
  }
`;
