import { ThemeProvider } from "styled-components";
import applyTheme from "@/theme/applyTheme";
import { useMemo } from "react";

type Props = {
  children: React.ReactNode;
};

// If the theme is constant, define it outside
const baseTheme = { moduleContentThemeColor: "#FCC000" };

const ThemeProviderContext = ({ children }: Props) => {
  // Only recompute appliedTheme if baseTheme changes
  const appliedTheme = useMemo(() => applyTheme(baseTheme), []);

  return <ThemeProvider theme={appliedTheme}>{children}</ThemeProvider>;
};

export default ThemeProviderContext;
