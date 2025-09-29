import styled from "styled-components";
import { Breakpoint, ColorKey, Spacing } from "@/theme/defaultTheme";
import { Link } from "react-router-dom";

interface StyledNavigationTabWrapperProps {
  $dropdownItem?: boolean;
  $isLastTab?: boolean;
  $borderLeft?: boolean;
  $disabled?: boolean;
}
export const StyledNavigationTabWrapper = styled.div<StyledNavigationTabWrapperProps>`
  display: flex;
  width: ${({ $dropdownItem }) => ($dropdownItem ? "100%" : "")};
  height: 100%;
  border-right: ${({ $dropdownItem, $isLastTab, theme }) =>
    $dropdownItem || $isLastTab
      ? "none"
      : `1px solid ${theme.colors[ColorKey.lightBorder]}`};
  border-left: ${({ $borderLeft, theme }) =>
    $borderLeft ? `1px solid ${theme.colors[ColorKey.lightBorder]}` : "none"};
  align-items: center;
  justify-content: ${({ $dropdownItem }) =>
    $dropdownItem ? "flex-start" : "center"};
  padding: ${Spacing.xs};
  white-space: nowrap;
  color: ${({ $disabled, theme }) =>
    $disabled
      ? theme.colors[ColorKey.disabled]
      : theme.colors[ColorKey.primaryTextColor]};
  cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};

  &:focus {
    background-color: ${({ theme }) => theme.colors[ColorKey.hoverBackground]};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({ theme, $disabled }) =>
        $disabled
          ? theme.colors[ColorKey.transparent]
          : theme.colors[ColorKey.hoverBackground]};
    }
  }

  @media (${Breakpoint.forTabletPortraitDown}) {
    min-width: "4.2rem";
  }
`;

export const StyledNavigationTabLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 100%;
  color: inherit;
  width: 100%;
  padding: ${Spacing.xs};
  cursor: pointer;
  border-right: 1px solid
    ${({ theme }) => theme.colors[ColorKey.moduleContentBackgroundColor]};

  &:focus {
    background-color: ${({ theme }) => theme.colors[ColorKey.hoverBackground]};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({ theme }) =>
        theme.colors[ColorKey.hoverBackground]};
    }
  }
`;

interface StyledTabTextProps {
  $isDropdown?: boolean;
  $isVisibleOnMobile?: boolean;
}
export const StyledTabText = styled.span<StyledTabTextProps>`
  margin-left: ${({ $isDropdown }) => ($isDropdown ? "0px" : "1rem")};
  @media (${Breakpoint.forTabletPortraitDown}) {
    display: ${({ $isVisibleOnMobile }) =>
      $isVisibleOnMobile ? "block" : "none"};
  }
`;

export const StyledToggleIcon = styled.div`
  display: flex;
  margin-left: ${Spacing.xs};
  @media (${Breakpoint.forTabletPortraitDown}) {
    display: none;
  }
`;
