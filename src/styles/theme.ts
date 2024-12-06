import { DefaultTheme } from "styled-components";
import { COLORS } from "./constants";

export const theme: DefaultTheme = {
  colors: COLORS,
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof COLORS;
  }
}
