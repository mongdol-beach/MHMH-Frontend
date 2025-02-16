import styled, { keyframes } from "styled-components";

const openEffect = keyframes`
 0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const closeEffect = keyframes`
 0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

export const Container = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 375px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  animation: ${({ $isOpen }) => ($isOpen ? openEffect : closeEffect)} 0.25s ease;
  z-index: 1;
`;


