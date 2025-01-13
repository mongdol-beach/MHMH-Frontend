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
`;

/* index.tsx*/

export const ModalBg = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  max-width: 375px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Content = styled.div`
  background-color: white;
  padding: 16px 20px;
  border-radius: 8px;
  width: 100%;
  position: relative;
`;
