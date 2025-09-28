import "styled-components";
import { DefaultThemeProps } from "./theme/defaultTheme";

declare module "styled-components" {
  export interface DefaultTheme extends DefaultThemeProps {}
}