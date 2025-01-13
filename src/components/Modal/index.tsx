import React, { ReactNode } from "react";
import * as S from "./styled";

interface ModalProps {
  isOpen: boolean;
  closeModal?: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  const handleCloseModal = () => {
    if (closeModal) closeModal();
  };

  return (
    <S.ModalBg onClick={handleCloseModal}>
      <S.Content onClick={(e) => e.stopPropagation()}>{children}</S.Content>
    </S.ModalBg>
  );
};

export default Modal;
