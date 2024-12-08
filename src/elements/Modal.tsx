import React, { ReactNode } from "react";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={closeModal}>
      <Content onClick={(e) => e.stopPropagation()}>{children}</Content>
    </Overlay>
  );
};

export default Modal;

// Styled components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Content = styled.div`
  background-color: white;
  padding: 20px;
  width: 100%;
`;
