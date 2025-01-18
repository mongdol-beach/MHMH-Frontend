import React, { ReactNode } from "react";
import * as S from "./styled";
import Portal from "../Portal";

interface HasModalProps {
  isOpen: boolean;
  closeModal?: () => void;
  children: ReactNode;
}

const HasCloseModal: React.FC<HasModalProps> = ({
  isOpen,
  closeModal,
  children,
}) => {
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

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
}

function Modal({ isOpen, children }: ModalProps) {
  return (
    <Portal>
      <S.Container $isOpen={isOpen}>{children}</S.Container>
    </Portal>
  );
}

export { HasCloseModal, Modal };
export default Modal;
