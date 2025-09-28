import { Spacing } from "@/theme/defaultTheme";
import styled from "styled-components";

export const StyledTextFieldWrapper = styled.div`
  position: relative;
  /* Base element styles */
  display: flex;
  flex-direction: column;
  margin-top: ${Spacing.sm};
  white-space: nowrap;

  /* Slider properties */
  --slider-track-background: #dfdfdf;
  --slider-track-height: 0.25rem;
  --slider-thumb-size: 1rem; /* 0.25rem * 4 */
  --slider-track-border-radius: 0.25rem;
  --slider-thumb-border-width: 2px;
  --slider-thumb-border-focus-width: 1px;
  --slider-thumb-border-color: #fff;
  --slider-thumb-background: #3b4ce2;

  /* Switch properties */
  --switch-orb-size: 1rem;
  --switch-orb-offset: 2px;
  --switch-width: 2.5rem;
  --switch-height: 1.5rem;
`;
