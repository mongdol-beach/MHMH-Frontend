import Modal from "..";
import * as S from "../styled";
import Close from "@assets/icons/close.svg";

interface FeedbackModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isOpen,
  closeModal,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <S.CloseIcon src={Close} onClick={closeModal} />
        <S.ModalContainer></S.ModalContainer>
      </Modal>
    </>
  );
};

export default FeedbackModal;
