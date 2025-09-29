import { memo } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlipProp } from "@fortawesome/fontawesome-svg-core";
import {
  DisplayProps,
  MarginProps,
  PaddingProps,
  WidthProps,
  display,
  margin,
  padding,
  width,
} from "@/components/shared/utils";
import { ColorKey, IconSize } from "@/theme/defaultTheme";
import { isNumber } from "lodash";

export type StyledIconSizeType = number | IconSize;

export interface StyledIconProps
  extends MarginProps,
    PaddingProps,
    WidthProps,
    DisplayProps {
  $size?: StyledIconSizeType;
  $color?: ColorKey | string;
  $drag?: boolean;
  $absoluteLeft?: string;
  $absoluteRight?: boolean;
  $absoluteCenter?: boolean;
  $clickable?: boolean;
  $hoverable?: boolean;
  $disabled?: boolean;
  $flex?: boolean;
  $inactive?: boolean;
  $transition?: string;
  onClick?: () => void;
  $transitionDuration?: string;
  $transitionProperty?: string;
  $transitionTiming?: string;
  $iconFill?: boolean;
  $transform?: string;
}

export const StyledIcon = styled.span<StyledIconProps>`
  ${margin};
  ${padding};
  ${width};
  ${display};

  ${({
    $size = IconSize.sm,
    $transitionDuration,
    $transitionProperty,
    $transitionTiming,
  }) => {
    let calcSize = "";
    if (isNumber($size)) {
      calcSize = `${$size}rem`;
    } else if ($size in IconSize) {
      calcSize = $size;
    } else {
      calcSize = $size;
    }

    return `
      display: block;
      font-size: ${calcSize} !important;
      line-height: ${calcSize} !important;
      
      > svg {
        display: block;
        height: ${calcSize} !important;
        width: auto !important;
        margin: 0 auto;
        font-size: ${calcSize} !important;
        transition-duration: ${$transitionDuration};
        transition-property: ${$transitionProperty};
        transition-timing-function: ${$transitionTiming};
      }
    `;
  }};

  ${({ theme, $color }) =>
    $color && `color: ${theme.colors[$color] || $color};`};

  ${({ $drag, theme }) =>
    theme &&
    $drag &&
    `
    color: ${theme.colors[ColorKey.primaryTextColor]};
    cursor: move;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;

    &:active {
      cursor: grabbing;
      cursor: -moz-grabbing;
      cursor: -webkit-grabbing;
    }
  `};

  ${({ $absoluteLeft }) =>
    $absoluteLeft &&
    css`
      position: absolute;
      left: ${$absoluteLeft};
    `};

  ${({ $absoluteRight, $transform }) =>
    $absoluteRight &&
    `
      position: absolute;
      right: 0.7rem;
      top: 50%;
      transform: ${
        $transform ? `translateY(${$transform})` : "translateY(-50%)"
      };
    `};

  ${({ $absoluteCenter }) =>
    $absoluteCenter &&
    `
    position: absolute; 
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  `};

  ${({ $clickable }) =>
    $clickable &&
    `
    cursor: pointer;
  `};

  ${({ $hoverable }) =>
    $hoverable &&
    `
    &:hover { 
      opacity: 0.7;
    }
  `};

  ${({ $disabled }) =>
    $disabled &&
    `
    opacity: 0.5;
  `};

  ${({ $flex }) =>
    $flex &&
    `
    display: flex;
    align-items: flex-start;
  `}

  ${({ $inactive }) =>
    $inactive &&
    `
      pointer-events: none;
  `}

  ${({ theme, $iconFill }) =>
    $iconFill &&
    `
    fill: ${theme.colors[ColorKey.primary]};
  `};
`;

const StyledIconPlaceholder = styled.div`
  height: 2.6rem;
  width: 2.6rem;
`;

export interface IconProps extends StyledIconProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  faIcon: any; // Needs to be any to handle duo tone icons
  flip?: FlipProp;
  faFixedWidth?: boolean;
  title?: string;
  dataCy?: string;
}

const Icon = ({
  faIcon,
  flip,
  faFixedWidth,
  title,
  dataCy,
  ...props
}: IconProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <StyledIcon title={title} {...props}>
    {faIcon ? (
      <FontAwesomeIcon
        key={faIcon.iconName}
        icon={faIcon}
        fixedWidth={faFixedWidth}
        flip={flip}
        data-cy={dataCy}
      />
    ) : (
      <StyledIconPlaceholder />
    )}
  </StyledIcon>
);

// We need to provide any icon in order to avoid empty div
export default memo(Icon);
