type BreakPointKey = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

type BreakPointValue = Record<BreakPointKey, string>;

type WidthVariant = "max-width" | "min-width";

const MEDIA_SCREEN = "@media screen";

const values: BreakPointValue = {
  xs: "320px",
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1440px",
};

const createSingleRuleQuery = (
  widthVariant: WidthVariant,
  breakpointKey: BreakPointKey
) => {
  const breakPoint = baseBreakPoints.values[breakpointKey];
  return `${MEDIA_SCREEN} and (${widthVariant}: ${breakPoint})`;
};

const up = (breakPointKey: BreakPointKey) =>
  createSingleRuleQuery("min-width", breakPointKey);

const down = (breakPointKey: BreakPointKey) =>
  createSingleRuleQuery("max-width", breakPointKey);

type BreakPoints = {
  values: BreakPointValue;
  down: (breakPointKey: BreakPointKey) => string;
  up: (breakPointKey: BreakPointKey) => string;
};

const baseBreakPoints: BreakPoints = {
  values,
  up,
  down,
};

export { baseBreakPoints, down, up };
export type { BreakPointKey, BreakPoints, BreakPointValue };
