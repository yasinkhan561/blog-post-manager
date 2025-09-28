import styled from "styled-components";
import { ColorKey } from "@/theme/defaultTheme";

export const StyledPostManager = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) =>
    theme.colors[ColorKey.moduleContentBackgroundColor]};
`;