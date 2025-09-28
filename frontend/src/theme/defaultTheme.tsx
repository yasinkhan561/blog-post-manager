export enum ColorKey {
  // Static colors
  primaryTextColor = "primaryTextColor",
  secondaryTextColor = "secondaryTextColor",
  disabled = "disabled",
  disabledBackground = "disabledBackground",
  hoverBackground = "moduleContentHover",
  placeholder = "placeholder",
  moduleContentBackgroundColor = "moduleContentBackgroundColor",
  secondaryBackground = "secondaryBackground",
  danger = "danger",
  dangerBackground = "dangerBackground",
  white = "white",
  black = "black",
  primary = "primary",
  borderColor = "borderColor",
  focusedInput = "focusedInput",
  primaryButton = "primaryButton",
  primaryButtonText = "primaryButtonText",
  secondaryButton = "secondaryButton",
  secondaryButtonText = "secondaryButtonText",
  tertiaryButton = "tertiaryButton",
  tertiaryButtonText = "tertiaryButtonText",

  lightBorder = "lightBorder",
  link = "link",
  transparent = "transparent",
  tabButtonBorderHover = "tabButtonBorderHover",
  iconButtonHover = "iconButtonHover",
  colorPrimaryHover = "colorPrimaryHover",
  greyBorder = "greyBorder",
  transparentButtonText = "transparentButtonText",
  warning = "warning",
  warningIconBackground = "warningIconBackground",
  warningBannerBackground = "warningBannerBackground",
  iconGreyColor = "iconGreyColor",
}

export interface DefaultThemeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colors: any;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const colors: any = {};
// Static colors
colors[ColorKey.primaryTextColor] = "#333333";
colors[ColorKey.secondaryTextColor] = "#8A8A8A";
colors[ColorKey.disabled] = "#CCCCCC";
colors[ColorKey.disabledBackground] = "#F5F5F5";
colors[ColorKey.hoverBackground] = "#EEEEEE";
colors[ColorKey.placeholder] = "#ABABAB";
colors[ColorKey.secondaryBackground] = "#F9F9F9";
colors[ColorKey.danger] = "#FF4E4E";
colors[ColorKey.dangerBackground] = "#FFF6F2";
colors[ColorKey.white] = "#FFFFFF";
colors[ColorKey.primary] = "#FCC000";
colors[ColorKey.colorPrimaryHover] = "#fcc000b3";
colors[ColorKey.black] = "#000000";
colors[ColorKey.warning] = "#F6D200";
colors[ColorKey.moduleContentBackgroundColor] = "#f4f4f4";

/** For borders, dividers, inputs */
colors[ColorKey.borderColor] = "#CCCCCC";
colors[ColorKey.lightBorder] = "#E2E2E2";
colors[ColorKey.focusedInput] = "#5BADFF";
colors[ColorKey.greyBorder] = "#DDDDDD";
colors[ColorKey.transparentButtonText] = "#333333";
colors[ColorKey.iconGreyColor] = "#707070";

/** Background */
colors[ColorKey.warningIconBackground] = "#FCA800";
colors[ColorKey.warningBannerBackground] = "#FF9900";

/** For buttons */
/** For buttons */
colors[ColorKey.primaryButton] = "#333333";
colors[ColorKey.primaryButtonText] = "#FFFFFF";
colors[ColorKey.secondaryButton] = "#B7B7B7";
colors[ColorKey.secondaryButtonText] = "#FFFFFF";
colors[ColorKey.tertiaryButton] = "#FCC000";
colors[ColorKey.tabButtonBorderHover] = "#BABABA";
colors[ColorKey.iconButtonHover] = "#F1F1F1";

/** Transparent */
colors[ColorKey.transparent] = "#FFFFFF00";

const defaultTheme: DefaultThemeProps = {
  colors,
};
export default defaultTheme;

export enum TextSize {
  xxs = "1rem",
  xs = "1.2rem",
  sm = "1.4rem" /** Default text on larger screens */,
  md = "1.6rem" /** Default text on mobile */,
  lg = "1.8rem",
  xl = "2.0rem",
  xxl = "2.2rem",
}

/** Standard icon sizes */
export enum IconSize {
  xxxs = "1.0rem",
  xxs = "1.2rem",
  xs = "1.4rem",
  sm = "1.6rem",
  md = "1.8rem",
  lg = "2.0rem",
  xl = "2.2rem",
  xxl = "2.4rem",
  xxxl = "3.0rem",
}

export enum BorderRadius {
  default = "10px", // Should be in px
  round = "50px",
  icon = "5px",
  button = "5px",
  mobileButton = "22px",
}

export enum BoxShadow {
  default = "0rem 0.2rem 0.7rem 0rem rgb(0 0 0 / 20%)",
  light = "0rem 0.1rem 0.3rem 0rem rgb(0 0 0 / 20%)",
  toast = "0rem 0rem 1rem rgba(0, 0, 0, 0.16)",
  dropdown = "0rem 0.2rem 0.7rem 0rem rgb(0 0 0 / 25%)",
  card = "0rem 0.3rem 0.6rem 0rem rgba(0, 0, 0, 0.09)",
}

export enum Spacing {
  none = "0",
  xxs = "0.5rem",
  xs = "1rem",
  sm = "1.5rem",
  md = "2rem",
  lg = "2.5rem",
  xl = "3rem",
  xxl = "4rem",
  xxxl = "5rem",
  xxxxl = "6rem",
  xxxxlPlus = "10rem",
  auto = "auto",
  inputPadding = "0.8rem 1rem",
  buttonPadding = "1rem 1.2rem",
  normalButtonPaddingTouch = "1.1rem 1.2rem",
  menuBodySpacing = "1.8rem",
}

export enum BreakpointRem {
  PHONE = 60,
  TABLET_PORTRAIT = 90,
  TABLET_LANDSCAPE = 120,
  BIG_DESKTOP = 180,
}

export enum Breakpoint {
  forPhoneOnly = "max-width: 37.5em",
  forPhoneUp = "min-width: calc(37.5em + 1px)",
  forTabletPortraitDown = "max-width: 56.25em",
  forTabletPortraitUp = "min-width: calc(56.25em + 1px)",
  forTabletLandscapeDown = "max-width: 75em",
  forTabletLandscapeUp = "min-width: calc(75em + 1px)",
  forBigDesktopDown = "max-width: 112.5em",
  forBigDesktopUp = "min-width: calc(112.5em + 1px)",
}

export enum TextWeight {
  light = 300,
  regular = 400,
  medium = 500,
  semiBold = 600,
  bold = 700,
}

export enum MessageBannerColors {
  success = "positiveGreen",
  warning = "warning",
  error = "danger",
  info = "placeholder",
}
