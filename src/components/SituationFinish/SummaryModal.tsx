import React from "react";
import Modal from "../../components/Modal/SituationFinishModal/Modal";
import Close from "@assets/icons/close.svg";
import * as S from "./styled";
import { TopicTip } from "../../types/topic";

interface SummaryModalProps {
  isOpen: boolean;
  closeModal: () => void;
  topics: {
    id: number;
    content: string;
    isRecommend: boolean;
    tips: TopicTip[]; // string[] 대신 TopicTip[]
  }[];
}

const SummaryModal: React.FC<SummaryModalProps> = ({
  isOpen,
  closeModal,
  topics,
}) => {
  return (
    <Modal isOpen={isOpen}>
      <S.CloseIcon src={Close} onClick={closeModal} />
      <S.ModalContainer>
        <S.ModalHeader>
          <S.ModalHeader_left>
            <S.ModalHeader_title>#소개팅_토픽</S.ModalHeader_title>
            <S.ModalHeader_desc>
              방금 이용한
              <br />
              토픽 요약
            </S.ModalHeader_desc>
          </S.ModalHeader_left>
          <S.ModalHeader_right>
            {/* <S.ModalHeader_date>2021.12.07</S.ModalHeader_date> */}
          </S.ModalHeader_right>
        </S.ModalHeader>
        <S.ModalContents>
          {topics.map((topic, idx) => (
            <S.ModalContents_metrics key={idx}>
              <S.ModalContents_metrics_left>
                <S.ModalContents_metrics_currentOrder>
                  Q{idx + 1}
                </S.ModalContents_metrics_currentOrder>
                <S.ModalContents_metrics_topic>
                  {topic.content}
                </S.ModalContents_metrics_topic>
              </S.ModalContents_metrics_left>
              <S.ModalContents_metrics_right>
                <S.ModalContents_metrics_topicOrder>
                  No.{topic.id}
                </S.ModalContents_metrics_topicOrder>
              </S.ModalContents_metrics_right>
              <S.ModalContents_bg />
            </S.ModalContents_metrics>
          ))}
        </S.ModalContents>
      </S.ModalContainer>
    </Modal>
  );
};

export default SummaryModal;
