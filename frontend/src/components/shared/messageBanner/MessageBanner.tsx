import { ReactNode } from "react";
import { AlertTriangle, X } from "lucide-react";

import {
  StyledMessageBannerContainer,
  StyledMessageBanner,
  StyledMessageBannerContent,
  StyledMessageBannerButtonsContainer,
  StyledMessageBannerButton,
  StyledMessageBannerWrapper,
  StyledMessageBannerCloseButton,
  StyledMessageBannerMessage,
} from "@/components/shared/messageBanner/MessageBannerStyles";
import { ColorKey, IconSize } from "@/theme/defaultTheme";
import MessageType from "@/constants/MessageType";

export interface MessageBannerButtonProps {
  callback: () => void;
  buttonText: string;
}

export interface MessageBannerProps {
  children?: ReactNode;
  type: MessageType;
  isVisible?: boolean;
  onCloseCallback?: () => void;
  dataCy?: string;
  isStackable?: boolean;
  primaryButton?: MessageBannerButtonProps;
}


const MessageBanner = ({
  children,
  type,
  isVisible,
  onCloseCallback,
  dataCy,
  isStackable = true,
  primaryButton,
}: MessageBannerProps) => {
  const messageBannerStyles = {
    [MessageType.ERROR]: {
      backgroundColor: ColorKey.danger,
      IconComponent: AlertTriangle, // Lucide icon component
    },
    [MessageType.WARNING]: {
      backgroundColor: ColorKey.warningBannerBackground,
      IconComponent: AlertTriangle,
    },
  };

  const IconComponent = type ? messageBannerStyles[type].IconComponent : AlertTriangle;

  return (
    <StyledMessageBannerWrapper $isVisible={isVisible}>
      <StyledMessageBanner
        $isVisible={isVisible}
        $backgroundColor={
          type ? messageBannerStyles[type].backgroundColor : ColorKey.danger
        }
        data-cy={`messageBanner${dataCy}`}
        $isStackable={isStackable}
      >
        <StyledMessageBannerContainer $isVisible={isVisible}>
          {/* Left icon */}
          <IconComponent
            color={ColorKey.white}
            size={IconSize.md}
          />

          <StyledMessageBannerContent>
            <StyledMessageBannerMessage>{children}</StyledMessageBannerMessage>

            {primaryButton && (
              <StyledMessageBannerButtonsContainer>
                <StyledMessageBannerButton
                  onClick={primaryButton.callback}
                  data-cy={`${dataCy}PrimaryButton`}
                >
                  {primaryButton.buttonText.toUpperCase()}
                </StyledMessageBannerButton>
              </StyledMessageBannerButtonsContainer>
            )}
          </StyledMessageBannerContent>

          {onCloseCallback && (
            <StyledMessageBannerCloseButton onClick={onCloseCallback}>
              <X color={ColorKey.white} size={IconSize.md} />
            </StyledMessageBannerCloseButton>
          )}
        </StyledMessageBannerContainer>
      </StyledMessageBanner>
    </StyledMessageBannerWrapper>
  );
};

export default MessageBanner;
