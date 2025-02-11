type FontSize = "xs" | "lg";
// "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

const baseFontSizes: Record<FontSize, string> = {
  xs: "20px",
  lg: "35px",
};

type FontWeight = "normal" | "bold";

const baseFontWeights: Record<FontWeight, number> = {
  normal: 400,
  bold: 600,
};

type Typography = {
  fontSize: Record<FontSize, string>;
  fontWeight: Record<FontWeight, number>;
};

export { baseFontSizes, baseFontWeights };
export type { FontSize, FontWeight, Typography };
