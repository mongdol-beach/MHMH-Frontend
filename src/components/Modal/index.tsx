import { ReactNode } from "react";
import Portal from "../Portal";
import * as S from "./styled";

export interface ModalProps {
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

export default Modal;
