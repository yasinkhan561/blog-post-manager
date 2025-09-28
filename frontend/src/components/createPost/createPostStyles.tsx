import { BorderRadius, ColorKey, Spacing } from "@/theme/defaultTheme";
import styled from "styled-components";

export const StyledCreatePostSection = styled.div`
  background: ${({ theme }) => theme.colors[ColorKey.white]};
  display: block;
  max-width: 60rem;
  padding: 2em;
  border-radius: ${BorderRadius.default};
  line-height: 1.6;
  overflow: hidden;
  margin: ${Spacing.md} ${Spacing.auto};
  position: relative;
  font-size: 0.875rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
  flex-direction: row;
  gap: 1rem;
`;
export const StyledPageTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors[ColorKey.primaryTextColor]};
  text-align: center;
`;
