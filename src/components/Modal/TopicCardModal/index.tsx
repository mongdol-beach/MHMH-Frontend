import Modal from "../index";
import * as S from "./styled";
import Card from "../../Card";
import { SituationColor } from "../../../types/topic";
import CancleIcon from "@assets/icons/cancle.svg";

export interface TopicCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
  content: string;
  situationName: string;
  situationColor: SituationColor;
}

function TopicCardModal({
  isOpen,
  onClose,
  id,
  content,
  situationName,
  situationColor,
}: TopicCardModalProps) {
  return (
    <Modal isOpen={isOpen}>
      <S.CardBox>
        <Card
          id={id}
          content={content}
          situationName={situationName}
          $situationColor={situationColor}
        />
        <S.CloseButton
          type="button"
          onClick={onClose}
          $situationColor={situationColor}
        >
          <S.Close src={CancleIcon} />
        </S.CloseButton>
      </S.CardBox>
    </Modal>
  );
}

export default TopicCardModal;
