import React from "react";
import {
  StyledNavigationTabLink,
  StyledNavigationTabWrapper,
  StyledTabText,
} from "@/components/shared/navigation/navigationTab/NavigationTabStyles";
import { ColorKey, IconSize } from "@/theme/defaultTheme";
import { StyledLink } from "@/components/shared/StyledLink";
import Icon from "@/components/shared/Icon";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface NavigationTabProps {
  navigateTo?: string;
  icon: IconDefinition;
  text: string;
  action?: () => void;
  dataCy?: string;
  dropdownItem?: boolean;
  isLastTab?: boolean;
  borderLeft?: boolean;
  isHelpLink?: boolean;
  disabled?: boolean;
  showTextOnMobile?: boolean;
  /**  to pass along some data without including it in the URL */
  linkState?: Record<string, unknown>;
}

const NavigationTab = ({
  navigateTo,
  icon,
  text,
  action,
  dataCy,
  dropdownItem,
  isLastTab,
  borderLeft,
  isHelpLink,
  disabled,
  showTextOnMobile,
  linkState,
}: NavigationTabProps) => {
  const iconColor = disabled ? ColorKey.disabled : ColorKey.primary;

  return navigateTo ? (
    <StyledNavigationTabLink
      to={navigateTo}
      state={linkState}
      target={isHelpLink ? "_blank" : undefined}
      rel={isHelpLink ? "noopener noreferrer" : undefined}
      data-cy={dataCy}
    >
      <Icon faIcon={icon} $color={iconColor} $size={IconSize.sm} />
      <StyledTabText $isVisibleOnMobile={showTextOnMobile}>
        {text}
      </StyledTabText>
    </StyledNavigationTabLink>
  ) : (
    <StyledNavigationTabWrapper
      $dropdownItem={dropdownItem || undefined}
      onClick={action}
      $isLastTab={isLastTab}
      $borderLeft={borderLeft}
      $disabled={disabled}
      data-cy={dataCy}
      className="navigation-tab-wrapper"
    >
      <Icon faIcon={icon} $color={iconColor} $size={IconSize.sm} />
      <StyledTabText $isVisibleOnMobile={showTextOnMobile}>
        {text}
      </StyledTabText>
    </StyledNavigationTabWrapper>
  );
};

export default NavigationTab;
