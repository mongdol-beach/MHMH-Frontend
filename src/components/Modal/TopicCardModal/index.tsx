import Modal from "..";
import * as S from "./styled";
import Card from "../../Card";

export interface TopicCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
  content: string;
  situationName: string;
}

function TopicCardModal({
  isOpen,
  onClose,
  id,
  content,
  situationName,
}: TopicCardModalProps) {
  return (
    <Modal isOpen={isOpen}>
      <S.CardBox>
        <Card id={id} content={content} situationName={situationName} />
        <S.CloseButton type="button" onClick={onClose}>
          닫기
        </S.CloseButton>
      </S.CardBox>
    </Modal>
  );
}

export default TopicCardModal;
