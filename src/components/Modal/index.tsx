import { ReactNode } from "react";
import * as S from "./styled";
import Portal from "../Portal";

interface ModalProps {
  isOpen: boolean;
  closeModal?: () => void;
  children: ReactNode;
}

function Modal({ isOpen, children, closeModal }: ModalProps) {
  if (!isOpen) return null;

  return (
    <Portal>
      <S.Container $isOpen={isOpen} onClick={closeModal}>
        {children}
      </S.Container>
    </Portal>
  );
}

export default Modal;