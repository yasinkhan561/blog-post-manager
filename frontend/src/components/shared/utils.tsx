import { isNumber } from "lodash";
import { DefaultTheme, css } from "styled-components";
import { Breakpoint } from "@/theme/defaultTheme";

export interface PaddingProps {
  /** Define number in rems, string should define its unit */
  $padding?: number | string;
  /** The padding that should be applied top and bottom.
   * Define number in rems, string should define its unit */
  $paddingVertical?: number | string;
  /** The padding that should be applied left and right.
   * Define number in rems, string should define its unit */
  $paddingHorizontal?: number | string;
  /** Define number in rems, string should define its unit */
  $paddingLeft?: number | string;
  /** Define number in rems, string should define its unit */
  $paddingRight?: number | string;
  /** Define number in rems, string should define its unit */
  $paddingTop?: number | string;
  /** Define number in rems, string should define its unit */
  $paddingBottom?: number | string;
}

const paddingUtil = css<PaddingProps>`
  ${({ $padding }) =>
    $padding &&
    (isNumber($padding)
      ? `padding: ${$padding}rem;`
      : `padding: ${$padding};`)};
  ${({ $paddingVertical }) =>
    $paddingVertical &&
    (isNumber($paddingVertical)
      ? `padding-top: ${$paddingVertical}rem; padding-bottom: ${$paddingVertical}rem;`
      : `padding-top: ${$paddingVertical}; padding-bottom: ${$paddingVertical};`)};
  ${({ $paddingHorizontal }) =>
    $paddingHorizontal &&
    (isNumber($paddingHorizontal)
      ? `padding-left: ${$paddingHorizontal}rem; padding-right: ${$paddingHorizontal}rem;`
      : `padding-left: ${$paddingHorizontal}; padding-right: ${$paddingHorizontal};`)};
  ${({ $paddingLeft }) =>
    $paddingLeft &&
    (isNumber($paddingLeft)
      ? `padding-left: ${$paddingLeft}rem;`
      : `padding-left: ${$paddingLeft};`)};
  ${({ $paddingRight }) =>
    $paddingRight &&
    (isNumber($paddingRight)
      ? `padding-right: ${$paddingRight}rem;`
      : `padding-right: ${$paddingRight};`)};
  ${({ $paddingTop }) =>
    $paddingTop &&
    (isNumber($paddingTop)
      ? `padding-top: ${$paddingTop}rem;`
      : `padding-top: ${$paddingTop};`)};
  ${({ $paddingBottom }) =>
    $paddingBottom &&
    (isNumber($paddingBottom)
      ? `padding-bottom: ${$paddingBottom}rem;`
      : `padding-bottom: ${$paddingBottom};`)};
`;

export interface MarginProps {
  /** Define number in rems, string should define its unit */
  $margin?: number | string;
  /** The margin that should be applied top and bottom.
   * Define number in rems, string should define its unit */
  $marginVertical?: number | string;
  /** The margin that should be applied left and right.
   * Define number in rems, string should define its unit */
  $marginHorizontal?: number | string;
  /** Define number in rems, string should define its unit */
  $marginLeft?: number | string;
  /** Define number in rems, string should define its unit */
  $marginRight?: number | string;
  /** Define number in rems, string should define its unit */
  $marginTop?: number | string;
  /** Define number in rems, string should define its unit */
  $marginBottom?: number | string;
}

const marginUtil = css<MarginProps>`
  ${({ $margin }: MarginProps) =>
    $margin &&
    (isNumber($margin) ? `margin: ${$margin}rem;` : `margin: ${$margin};`)};
  ${({ $marginVertical }: MarginProps) =>
    $marginVertical &&
    (isNumber($marginVertical)
      ? `margin-top: ${$marginVertical}rem; margin-bottom: ${$marginVertical}rem;`
      : $marginVertical &&
        `margin-top: ${$marginVertical}; margin-bottom: ${$marginVertical};`)};
  ${({ $marginHorizontal }: MarginProps) =>
    $marginHorizontal &&
    (isNumber($marginHorizontal)
      ? `margin-left: ${$marginHorizontal}rem; margin-right: ${$marginHorizontal}rem;`
      : `margin-left: ${$marginHorizontal}; margin-right: ${$marginHorizontal};`)};
  ${({ $marginLeft }: MarginProps) =>
    $marginLeft &&
    (isNumber($marginLeft)
      ? `margin-left: ${$marginLeft}rem;`
      : `margin-left: ${$marginLeft};`)};
  ${({ $marginRight }: MarginProps) =>
    $marginRight &&
    (isNumber($marginRight)
      ? `margin-right: ${$marginRight}rem;`
      : `margin-right: ${$marginRight};`)};
  ${({ $marginTop }: MarginProps) =>
    $marginTop &&
    (isNumber($marginTop)
      ? `margin-top: ${$marginTop}rem;`
      : `margin-top: ${$marginTop};`)};
  ${({ $marginBottom }: MarginProps) =>
    $marginBottom &&
    (isNumber($marginBottom)
      ? `margin-bottom: ${$marginBottom}rem;`
      : `margin-bottom: ${$marginBottom};`)};
`;

export interface FlexProps {
  $wrap?: boolean;
  $direction?: string;
  $justifyContent?: boolean;
  $alignItems?: boolean;
  $alignSelf?: boolean;
  $flex?: string;
  $flexGrow?: string;
}

const flexUtil = css<FlexProps>`
  ${({ $wrap }: FlexProps) => $wrap && `flex-wrap: ${$wrap};`};
  ${({ $direction }: FlexProps) =>
    $direction && `flex-direction: ${$direction};`};
  ${({ $justifyContent }: FlexProps) =>
    $justifyContent && `justify-content: ${$justifyContent};`};
  ${({ $alignItems }: FlexProps) =>
    $alignItems && `align-items: ${$alignItems};`};
  ${({ $alignSelf }: FlexProps) => $alignSelf && `align-self: ${$alignSelf};`};
  ${({ $flex }) => $flex && `flex: ${$flex}`};
  ${({ $flexGrow }: FlexProps) => $flexGrow && `flex-grow: ${$flexGrow}`};
`;

export interface HeightProps {
  /** Define number in rems, string should define its unit */
  $height?: number | string;
  /** Define number in rems, string should define its unit */
  $maxHeight?: number | string;
  /** Define number in rems, string should define its unit */
  $minHeight?: number | string;
}
const heightUtil = css<HeightProps>`
  ${({ $height }: HeightProps) =>
    $height &&
    `
     height: ${isNumber($height) ? `${$height}rem` : $height}
  `}
  ${({ $maxHeight }) =>
    $maxHeight &&
    `max-height: ${isNumber($maxHeight) ? `${$maxHeight}rem` : $maxHeight}`}
  ${({ $minHeight }) =>
    $minHeight &&
    `min-height: ${isNumber($minHeight) ? `${$minHeight}rem` : $minHeight}`}
`;

export interface WidthProps {
  /** Define number in rems, string should define its unit */
  $width?: number | string;
  $fluid?: boolean;
  /** Define number in rems, string should define its unit */
  $maxWidth?: number | string;
  /** Define number in rems, string should define its unit */
  $minWidth?: number | string;
  /** Define number in rems, string should define its unit */
  $widthSm?: number | string;
}

const widthUtil = css<WidthProps>`
  ${({ $width }: WidthProps) => {
    const calcWidth = isNumber($width) ? `${$width}rem` : $width;
    return (
      $width &&
      `
      flex: 0 0 ${calcWidth}
      max-width: ${calcWidth}
  `
    );
  }};
  ${({ $fluid }) => $fluid && "width: 100% !important"};
  ${({ $maxWidth }) =>
    $maxWidth &&
    `max-width: ${isNumber($maxWidth) ? `${$maxWidth}rem` : $maxWidth};`}
  ${({ $minWidth }) =>
    $minWidth &&
    `min-width: ${isNumber($minWidth) ? `${$minWidth}rem` : $minWidth};`}
  ${({ $widthSm }) =>
    $widthSm &&
    `
    flex: 0 0 ${isNumber($widthSm) ? `${$widthSm}rem` : $widthSm};
        max-width: ${isNumber($widthSm) ? `${$widthSm}rem` : $widthSm};
    
    & {
      @media (${Breakpoint.forPhoneOnly}) {
        flex: 0 0 100%;
        }
    }`}
`;

export interface DisplayProps {
  $inlineBlock?: boolean;
  $displayNone?: boolean;
  $inlineFlex?: boolean;
  $inline?: boolean;
  $block?: boolean;
  $flex?: boolean;
}

const displayUtil = css<DisplayProps>`
  ${({ $inlineBlock }) => $inlineBlock && "display: inline-block"};
  ${({ $displayNone }) => $displayNone && "display: none !important"};
  ${({ $inlineFlex }) => $inlineFlex && "display: inline-flex"};
  ${({ $inline }) => $inline && "display: inline"};
  ${({ $block }) => $block && "display: block; width: 100%"};
  ${({ $flex }) => $flex === true && "display: flex"};
`;

export interface OverflowProps {
  $overflow?: boolean;
}

const overflowUtil = css<OverflowProps>`
  ${({ $overflow }) => $overflow && `overflow: ${$overflow};`}
`;

export interface BackgroundProps {
  $backgroundColor?: string;
}
const backgroundUtil = css<BackgroundProps>`
  ${({ $backgroundColor }) => `background-color: ${$backgroundColor}`};
`;

export interface BorderProps extends DefaultTheme {
  /** Color */
  $borderBottom?: string;
  /** Color */
  $borderTop?: string;
  /** Color */
  $borderLeft?: string;
  /** Color */
  $borderRight?: string;
}
const borderUtil = css<{ theme: DefaultTheme } & BorderProps>`
  ${({ theme, $borderBottom }) =>
    $borderBottom &&
    theme.colors[$borderBottom] &&
    `border-bottom: 1px solid ${theme.colors[$borderBottom]}`};
  ${({ theme, $borderTop }) =>
    $borderTop &&
    theme.colors[$borderTop] &&
    `border-top: 1px solid ${theme.colors[$borderTop]}`};
  ${({ theme, $borderLeft }) =>
    $borderLeft &&
    theme.colors[$borderLeft] &&
    `border-left: 1px solid ${theme.colors[$borderLeft]}`};
  ${({ theme, $borderRight }) =>
    $borderRight &&
    theme.colors[$borderRight] &&
    `border-right: 1px solid ${theme.colors[$borderRight]}`};
`;

export interface PositionProps {
  $fixedTop?: boolean;
  $relative?: boolean;
  $absolute?: boolean;
}

const positionUtil = css<PositionProps>`
  ${({ $fixedTop }) => $fixedTop && "position: fixed; top: 0"};
  ${({ $relative }) => $relative && "position: relative !important"};
  ${({ $absolute }) => $absolute && "position: absolute !important"};
`;

export interface InteractionProps {
  $clickable?: boolean;
  $move?: boolean;
}

const interactionUtil = css<InteractionProps>`
  ${({ $clickable }) => $clickable && "cursor: pointer"};
  ${({ $move }) => $move && "cursor: move"}
`;

export interface TextProps {
  $ellipsed?: boolean;
  /** Color */
  $textColor?: string;
  $textSize?: number;
  $textAlign?: boolean;
  $capitalize?: boolean;
  $fontSize?: number;
  $fontWeight?: string;
  $lineHeight?: number;
}
const textUtil = css<TextProps>`
  ${({ $ellipsed }) =>
    $ellipsed &&
    `
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}

  ${({ theme, $textColor }) =>
    $textColor &&
    theme.colors[$textColor] &&
    `color: ${theme.colors[$textColor]} !important;`}
  ${({ theme, $textSize }) =>
    $textSize &&
    (theme as any).textSizes &&
    (theme as any).textSizes[$textSize] &&
    `font-size: ${(theme as any).textSizes[$textSize]} !important;`}
  ${({ $textAlign }) => $textAlign && `text-align: ${$textAlign} !important;`}
  ${({ $capitalize }) => $capitalize && "text-transform: capitalize;"}
  ${({ $fontSize }) => $fontSize && `font-size: ${$fontSize} !important;`}
  ${({ $fontWeight }) =>
    $fontWeight && `font-weight: ${$fontWeight} !important;`}
  ${({ $lineHeight }) =>
    $lineHeight && `line-height: ${$lineHeight} !important;`}
`;

export interface StateProps {
  $disabled?: boolean;
}

const stateUtil = css<StateProps>`
  ${({ $disabled }) =>
    $disabled &&
    `
    opacity: .5;
    &:hover {
      opacity: .5 !important;
      cursor: default !important;
    }
  `};
`;

export interface PrintProps {
  $noPrint?: boolean;
  $printPadding?: number;
}

const printUtil = css<PrintProps>`
  ${({ $noPrint }) =>
    $noPrint &&
    `
      @media print {
        display: none;
      }
    `}
`;

export interface HideOnScreenProps {
  $hideOnSmallScreens?: boolean;
  $hideOnMediumScreens?: boolean;
  $hideOnLargeScreens?: boolean;
  $hideOnSmallAndMediumScreens?: boolean;
  $hideOnMediumAndLargeScreens?: boolean;
}

const hideOnScreenUtil = css<HideOnScreenProps>`
  ${({ $hideOnSmallScreens }: HideOnScreenProps) =>
    $hideOnSmallScreens &&
    `
    @media only screen and (min-width: 0em) and (max-width: 37.5em) {
      display: none !important;
    }
    `};

  ${({ $hideOnMediumScreens }) =>
    $hideOnMediumScreens &&
    `
    @media only screen and (min-width: 37.5em) and (max-width: 112.5em) {
      display: none !important;
    }
    `};

  ${({ $hideOnLargeScreens }) =>
    $hideOnLargeScreens &&
    `
    @media only screen and (min-width: 112.5em) {
      display: none !important;
    }
  `}

  ${({ $hideOnSmallAndMediumScreens }) =>
    $hideOnSmallAndMediumScreens &&
    `
    @media only screen and (max-width: 112.5em) {
      display: none !important;
    }
  `}

  ${({ $hideOnMediumAndLargeScreens }) =>
    $hideOnMediumAndLargeScreens &&
    `
    @media only screen and (min-width: 37.5em) {
      display: none !important;
    }
  `}
`;

export {
  paddingUtil as padding,
  marginUtil as margin,
  flexUtil as flex,
  widthUtil as width,
  heightUtil as height,
  displayUtil as display,
  overflowUtil as overflow,
  backgroundUtil as background,
  borderUtil as border,
  positionUtil as position,
  interactionUtil as interaction,
  textUtil as text,
  stateUtil as state,
  printUtil as print,
  hideOnScreenUtil as hideSize,
};
