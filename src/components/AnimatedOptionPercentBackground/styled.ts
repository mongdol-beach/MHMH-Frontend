import { motion } from "framer-motion";
import styled from "styled-components";

export interface OptionPercentBackgroundStyleProps {
  $percent: number | undefined;
  $isClicked: boolean;
}

export const OptionPercentBackground = styled(
  motion.div,
)<OptionPercentBackgroundStyleProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${({ $isClicked, theme }) =>
    $isClicked
      ? theme.colors["--card-color-blue-700"]
      : theme.colors["-grayscale-100"]};
  z-index: 0;
`;
