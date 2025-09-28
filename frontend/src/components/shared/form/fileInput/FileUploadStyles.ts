import { BorderRadius, Spacing, TextWeight } from "@/theme/defaultTheme";
import styled from "styled-components";

interface FileUploadStylesProps {
  $hasError?: boolean;
}

export const StyledFileUpload = styled.div`
  margin-top: ${Spacing.sm};
  display: flex;
  flex-direction: column;
`;

export const StyledPreview = styled.div`
  margin-top: 0.5rem;

  img {
    max-width: 150px;
    max-height: 150px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    object-fit: cover;
  }
`;
