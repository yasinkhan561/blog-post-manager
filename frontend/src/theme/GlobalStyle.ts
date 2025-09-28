import { createGlobalStyle, css } from "styled-components";
import defaultTheme, { ColorKey } from "@/theme/defaultTheme";

// we use the "css" helper to ensure correct formatting before parsing down to createGlobalStyle
const GlobalStyle = createGlobalStyle`${css`
  *,
  *::before,
  *::after {
    font-family: "Open Sans", sans-serif;
    box-sizing: border-box;
    font-size:1.4rem;
    outline: none;

    -webkit-tap-highlight-color: transparent;
  }

  html {
    font-size: 62.5%;
    min-height: 100vh;
    color: ${defaultTheme.colors[ColorKey.primaryTextColor]};
  }

  body {
    min-height: inherit;
    margin: 0;
    padding: 0;
  }

  #root {
    min-height: inherit;
    display: flex;
    flex-direction: column;
  }

  button {
    border: 0;
    background: inherit;
    -webkit-appearance: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
  }
  p {
    margin: 0;
  }
`}`;

export default GlobalStyle;
