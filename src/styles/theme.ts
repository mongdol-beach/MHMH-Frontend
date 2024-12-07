import { DefaultTheme } from "styled-components";
import { COLORS } from "./color";
import { SIZE, WEIGHT } from "./font";

export const theme: DefaultTheme = {
  colors: COLORS,
  size: SIZE,
  weight: WEIGHT,
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof COLORS;
    size: typeof SIZE;
    weight: typeof WEIGHT;
  }
}
