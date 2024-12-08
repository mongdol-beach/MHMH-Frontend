import styled from "styled-components";

export const CardContainer = styled.div`
  width: 20.375rem;
  height: 27rem;
  perspective: 1000px;
`;

export const CardInner = styled.div<{ $isFlipped: boolean }>`
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
  transform: ${(props) =>
    props.$isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

export const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;
