import { ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckCircle,
  faExclamationTriangle,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

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
import Icon from "@/components/shared/Icon";

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

interface MessageBannerStyles {
  [messageBannerType: string]: {
    backgroundColor: string;
    icon: IconDefinition;
  };
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
  const messageBannerStyles: MessageBannerStyles = {
    [MessageType.ERROR]: {
      backgroundColor: ColorKey.danger,
      icon: faExclamationTriangle as IconDefinition,
    },
    [MessageType.WARNING]: {
      backgroundColor: ColorKey.warningBannerBackground,
      icon: faExclamationTriangle as IconDefinition,
    },
    [MessageType.SUCCESS]: {
      backgroundColor: ColorKey.success,
      icon: faCheckCircle as IconDefinition,
    },
    [MessageType.INFO]: {
      backgroundColor: ColorKey.info,
      icon: faInfoCircle as IconDefinition,
    },
  };

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
          <Icon
            faIcon={
              type ? messageBannerStyles[type].icon : faExclamationTriangle
            }
            $color={ColorKey.white}
            $size={IconSize.md}
            onClick={onCloseCallback}
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
              <Icon
                faIcon={faTimes}
                $clickable
                $color={ColorKey.white}
                $size={IconSize.md}
              />
            </StyledMessageBannerCloseButton>
          )}
        </StyledMessageBannerContainer>
      </StyledMessageBanner>
    </StyledMessageBannerWrapper>
  );
};

export default MessageBanner;
