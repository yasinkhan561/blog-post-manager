import styled from "styled-components";
import { Spacing, Breakpoint } from "@/theme/defaultTheme";

export const StyledPostsContainer = styled.div`
  display: grid;
  gap: ${Spacing.md}; // Increased space between cards
  max-width: 1200px;
  margin: ${Spacing.lg} auto;
  padding: ${Spacing.sm};
  
  // Single column on small screens
  grid-template-columns: 1fr;

  // Two columns on tablet-sized screens
  @media (${Breakpoint.forTabletPortraitUp}) {
    grid-template-columns: repeat(2, 1fr);
  }

  // Three columns on larger screens
  @media (${Breakpoint.forTabletLandscapeUp}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StyledStatusMessage = styled.div`
  text-align: center;
  font-weight: bold;
  grid-column: 1 / -1; // Makes status message span all columns
`;