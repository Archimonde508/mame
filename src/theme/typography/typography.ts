type FontSize = "xs" | "sm" | "lg" | "xl";
// "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

const baseFontSizes: Record<FontSize, string> = {
  xs: "1.25rem",
  sm: "1.5rem",
  lg: "2.25rem",
  xl: "3rem"
};

type FontWeight = "normal" | "medium" | "bold";

const baseFontWeights: Record<FontWeight, number> = {
  normal: 400,
  medium: 500,
  bold: 600,
};

type Typography = {
  fontSize: Record<FontSize, string>;
  fontWeight: Record<FontWeight, number>;
};

export { baseFontSizes, baseFontWeights };
export type { FontSize, FontWeight, Typography };
