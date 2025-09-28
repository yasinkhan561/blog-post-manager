
import styled from "styled-components";
import { ColorKey, BorderRadius, IconSize } from "@/theme/defaultTheme";

export const StyledIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${BorderRadius.icon};
  color: ${({ theme }) => theme.colors[ColorKey.iconGreyColor]};
  padding: 0.3rem;
  transition: background-color 0.2s, color 0.2s;
 

  &:hover {
    background-color: ${({ theme }) => theme.colors[ColorKey.iconButtonHover]};
    color: ${({ theme }) => theme.colors[ColorKey.primaryTextColor]};
  }

  svg {
    width: ${IconSize.sm};
    height: ${IconSize.sm};
  }
`;
