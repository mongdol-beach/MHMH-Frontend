import React, { ReactNode } from "react";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  closeModal?: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <ModalBg onClick={closeModal}>
      <Content onClick={(e) => e.stopPropagation()}>{children}</Content>
    </ModalBg>
  );
};

export default Modal;

const ModalBg = styled.div`
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
`;

const Content = styled.div`
  background-color: white;
  padding: 16px 20px;
  border-radius: 8px;
  width: 100%;
  position: relative;
`;
