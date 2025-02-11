import { Interpolation } from "@emotion/react";
import { MameTheme } from "./theme";

type Styles = Interpolation<MameTheme>;

function createStyles<T extends { [key: string]: Interpolation<MameTheme> }>(
  arg: T
): T {
  return arg;
}

export { createStyles };
export type { Styles };
