import { css } from "styled-components";

export const SIZE = {
  "--font-size-28": "1.75rem",
  "--font-size-20": "1.25rem",
  "--font-size-18": "1.125rem",
  "--font-size-16": "1rem",
  "--font-size-14": "0.875rem",
  "--font-size-12": "0.75rem",
} as const;

export const WEIGHT = {
  "--font-weight-extraBold": "800",
  "--font-weight-semiBold": "600",
  "--font-weight-bold": "700",
  "--font-weight-medium": "500",
  "--font-weight-regular": "400",
  "--font-weight-light": "300",
} as const;

const FONT = {
  headline28: css`
    font-family: "Esamanru OTF";
    font-size: ${(props) => props.theme.size["--font-size-28"]}; /* 1.75rem */
    font-weight: ${(props) =>
      props.theme.weight["--font-weight-light"]}; /* 300 */
  `,

  title20: css`
    font-family: "Esamanru OTF";
    font-size: ${(props) => props.theme.size["--font-size-20"]}; /* 1.25rem */
    font-weight: ${(props) =>
      props.theme.weight["--font-weight-light"]}; /* 300 */
  `,
  title18: css`
    font-size: ${(props) => props.theme.size["--font-size-18"]}; /* 1.125rem */
    font-weight: ${(props) =>
      props.theme.weight["--font-weight-light"]}; /* 300 */
  `,
  sub_title16: css`
    font-family: "Esamanru OTF";
    font-size: ${(props) => props.theme.size["--font-size-16"]}; /* 1rem */
    font-weight: ${(props) =>
      props.theme.weight["--font-weight-light"]}; /* 300 */
  `,

  sub_title14: css`
    font-family: "Esamanru OTF";
    font-size: ${(props) => props.theme.size["--font-size-14"]}; /* 1rem */
    font-weight: ${(props) =>
      props.theme.weight["--font-weight-medium"]}; /* 500 */
  `,

  body16: css`
    font-family: "Pretendard";
    font-size: ${(props) => props.theme.size["--font-size-16"]}; /* 1rem */
    font-weight: ${(props) =>
      props.theme.weight["--font-weight-medium"]}; /* 500 */
  `,
  body16B: css`
    font-family: "Pretendard";
    font-size: ${(props) => props.theme.size["--font-size-16"]}; /* 1rem */
    font-weight: ${(props) =>
      props.theme.weight["--font-weight-extraBold"]}; /* 800 */
  `,
  caption14: css`
    font-family: "Pretendard";
    font-size: ${(props) => props.theme.size["--font-size-14"]}; /* 0.875rem */
    font-weight: ${(props) =>
      props.theme.weight["--font-weight-regular"]}; /* 400 */
  `,
  caption12: css`
    font-family: "Pretendard";
    font-size: ${(props) => props.theme.size["--font-size-12"]}; /* 0.75rem */
    font-weight: ${(props) =>
      props.theme.weight["--font-weight-regular"]}; /* 400 */
  `,
};

export default FONT;
