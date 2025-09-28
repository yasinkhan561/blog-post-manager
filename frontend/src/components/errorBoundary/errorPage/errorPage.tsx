import { useMemo } from "react";
// @ts-ignore
import errorPageImage from "@/assets/images/error-page-image.png";

import {
  StyledButtonContainer,
  StyledErrorMessage,
  StyledErrorPage,
  StyledErrorPageButton,
  StyledErrorTitle,
  StyledImageWrapper,
} from "./errorPageStyles";

interface ErrorPageProps {
  errorTitle?: string;
  errorMessage: string;
  handleGoBack: () => void;
}

const ErrorPage = ({
  errorTitle,
  errorMessage,
  handleGoBack,
}: ErrorPageProps) => {
  
  const errorPageImg = useMemo(() => errorPageImage, []);

  return (
    <StyledErrorPage data-cy="error-page">
      {errorTitle && <StyledErrorTitle>{errorTitle}</StyledErrorTitle>}
      <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
      <StyledImageWrapper>
        <img src={errorPageImg} alt={errorMessage} />
      </StyledImageWrapper>
    </StyledErrorPage>
  );
};

export default ErrorPage;
