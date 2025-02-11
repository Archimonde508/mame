import { PropsWithChildren } from "react";
import { baseBreakPoints, BreakPoints } from "./breakpoints/breakpoints";
import { baseColors, Colors } from "./colors/colors";
import {
  baseFontSizes,
  baseFontWeights,
  Typography,
} from "./typography/typography";
import { ThemeProvider } from "@emotion/react";

type MameTheme = {
  breakPoints: BreakPoints;
  colors: Colors;
  typography: Typography;
};

const BASE_THEME: MameTheme = {
  breakPoints: baseBreakPoints,
  colors: baseColors,
  typography: {
    fontSize: baseFontSizes,
    fontWeight: baseFontWeights,
  },
};

type MameThemeProviderProps = PropsWithChildren<{ theme?: MameTheme }>;

const MameThemeProvider = ({ children }: MameThemeProviderProps) => {
  return <ThemeProvider theme={BASE_THEME}>{children}</ThemeProvider>;
};

export { BASE_THEME, MameThemeProvider }
export type { MameTheme, MameThemeProviderProps }