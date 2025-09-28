import defaultTheme from "./defaultTheme";

export default (theme: unknown) => {
  if (!theme) return defaultTheme;
  return { ...defaultTheme };
};
