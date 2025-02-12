import React from "react";
import { HasCloseModal } from "../index";
import Close from "@assets/icons/close.svg";
import * as S from "./styled";
import { TopicTip } from "../../../types/topic";

interface SummaryModalProps {
  isOpen: boolean;
  closeModal: () => void;
  topics: {
    id: number;
    content: string;
    isRecommend: boolean;
    tips: TopicTip[];
  }[];
  situationName: string;
  situationColor: {
    boldColor: string;
    mainCardColor: string;
    backCardColor: string;
    backgroundColor: string;
  };
}

const SummaryModal: React.FC<SummaryModalProps> = ({
  isOpen,
  closeModal,
  topics,
  situationName,
  situationColor,
}) => {
  return (
    <HasCloseModal isOpen={isOpen} closeModal={closeModal}>
      <S.CloseIcon src={Close} onClick={closeModal} />
      <S.ModalContainer>
        <S.ModalHeader $situationColor={situationColor}>
          <S.ModalHeader_left>
            <S.ModalHeader_title $situationColor={situationColor}>
              #{situationName}_토픽
            </S.ModalHeader_title>
            <S.ModalHeader_desc>
              방금 이용한
              <br />
              토픽 요약
            </S.ModalHeader_desc>
          </S.ModalHeader_left>
          <S.ModalHeader_right>
            <S.ModalHeader_date>2021.12.07</S.ModalHeader_date>
          </S.ModalHeader_right>
        </S.ModalHeader>
        <S.ModalContents>
          {topics.map((topic, idx) => (
            <S.ModalContents_metrics key={idx} $situationColor={situationColor}>
              <S.ModalContents_metrics_left>
                <S.ModalContents_metrics_currentOrder>
                  Q{idx + 1}
                </S.ModalContents_metrics_currentOrder>
                <S.ModalContents_metrics_topic>
                  {topic.content}
                </S.ModalContents_metrics_topic>
              </S.ModalContents_metrics_left>
              <S.ModalContents_metrics_right>
                <S.ModalContents_metrics_topicOrder
                  $situationColor={situationColor}
                >
                  No.{topic.id}
                </S.ModalContents_metrics_topicOrder>
              </S.ModalContents_metrics_right>
              <S.ModalContents_bg $situationColor={situationColor} />
            </S.ModalContents_metrics>
          ))}
          <S.ModalBottom $situationColor={situationColor}></S.ModalBottom>
          <S.LastTitle>즐거운 대화였길 바래요 :) </S.LastTitle>
        </S.ModalContents>
      </S.ModalContainer>
    </HasCloseModal>
  );
};

export default SummaryModal;
