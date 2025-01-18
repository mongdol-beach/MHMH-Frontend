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

export const TopicNavigationControls = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  margin-top: 1.5rem;
  width: 100%;
  position: relative;
  gap: 1rem;
  padding: 0 1.75rem;
`;

export const LeftButtonWrapper = styled.div`
  justify-self: flex-start;
`;

export const RightButtonWrapper = styled.div`
  justify-self: flex-end;
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

export const IconButton = styled.button`
  border: ${({ theme }) => `1.5px solid ${theme.colors["--grayscale-800"]}`};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img``;

export const IconOpposite = styled(Icon)`
  transform: rotate(180deg);
`;
