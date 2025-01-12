import styled from "styled-components";
import { motion } from "framer-motion";
import FONT from "../../styles/font";

export const DeckContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 27rem;
`;

export const DeckWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 27rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardMotionWrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  cursor: grab;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    cursor: grabbing;
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const ProgressText = styled.span`
  ${FONT.body16}
  opacity: 0.5;
`;

export const CardWrapper = styled.div<{
  isVisible: boolean;
}>`
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`;
