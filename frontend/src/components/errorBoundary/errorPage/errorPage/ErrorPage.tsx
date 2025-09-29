import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import errorPageImage from "~/assets/images/error-page-image.png";
import { isWebApp } from "~/utils";
import {
  StyledButtonContainer,
  StyledErrorMessage,
  StyledErrorPage,
  StyledErrorPageButton,
  StyledErrorTitle,
  StyledImageWrapper,
} from "~/components/errorBoundary/errorPage/ErrorPageStyles";

interface ErrorPageProps {
  errorTitle?: string;
  errorMessageId: string;
  handleGoBack: () => void;
  handleTryAgain: () => void;
}

const ErrorPage = ({
  errorTitle,
  errorMessageId,
  handleGoBack,
  handleTryAgain,
}: ErrorPageProps) => {
  const { t } = useTranslation();
  const errorPageImg = useMemo(() => errorPageImage, []);

  return (
    <StyledErrorPage data-cy="error-page">
      {errorTitle && <StyledErrorTitle>{t(errorTitle)}</StyledErrorTitle>}
      <StyledErrorMessage>{t(errorMessageId)}</StyledErrorMessage>
      <StyledButtonContainer>
        {isWebApp() && (
          <StyledErrorPageButton onClick={handleGoBack} $secondary>
            {t("button:back")}
          </StyledErrorPageButton>
        )}
        <StyledErrorPageButton onClick={handleTryAgain}>
          {t("button:tryAgain")}
        </StyledErrorPageButton>
      </StyledButtonContainer>
      <StyledImageWrapper>
        <img src={errorPageImg} alt={t("error:errorMessage")} />
      </StyledImageWrapper>
    </StyledErrorPage>
  );
};

export default ErrorPage;
