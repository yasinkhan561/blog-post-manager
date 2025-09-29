import styled, { css } from "styled-components";
import { NAVBAR_HEIGHT } from "@/constants/common";
import { Breakpoint, ColorKey, TextSize } from "@/theme/defaultTheme";

export const StyledNavigationBarContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors[ColorKey.white]};
  color: ${({ theme }) => theme.colors[ColorKey.primaryTextColor]};
  min-height: ${NAVBAR_HEIGHT};
  border-bottom: 1px solid ${({ theme }) => theme.colors[ColorKey.lightBorder]};
  font-size: ${TextSize.md};
  z-index: 3;

  @media (${Breakpoint.forTabletPortraitDown}) {
    position: sticky;
    top: 0;
  }
`;
