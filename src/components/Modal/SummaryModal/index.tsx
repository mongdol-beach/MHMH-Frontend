import React from "react";
import Close from "@assets/icons/close.svg";
import * as S from "./styled";
import { TopicTip } from "../../../types/topic";
import Modal from "..";

interface SummaryModalProps {
  isOpen: boolean;
  closeModal: () => void;
  topics: {
    id: number;
    content: string;
    isRecommend: boolean;
    tips: TopicTip[];
  }[];
}

const SummaryModal: React.FC<SummaryModalProps> = ({
  isOpen,
  closeModal,
  topics,
}) => {
  return (

    <Modal isOpen={isOpen}>
      <S.Content>
        <S.CloseIcon src={Close} onClick={closeModal} />
        <S.ModalContainer>
          <S.ModalHeader>
            <S.ModalHeaderLeft>
              <S.ModalHeaderTitle>#소개팅_토픽</S.ModalHeaderTitle>
              <S.ModalHeaderDesc>
                방금 이용한
                <br />
                토픽 요약
              </S.ModalHeaderDesc>
            </S.ModalHeaderLeft>
            <S.ModalHeaderRight>
              {/* <S.ModalHeader_date>2021.12.07</S.ModalHeader_date> */}
            </S.ModalHeaderRight>
          </S.ModalHeader>
          <S.ModalContents>
            {topics.map((topic, idx) => (
              <S.Metrics key={idx}>
                <S.MetricsLeft>
                  <S.MetricsCurrentOrder>
                    Q{idx + 1}
                  </S.MetricsCurrentOrder>
                  <S.MetricsTopic>
                    {topic.content}
                  </S.MetricsTopic>
                </S.MetricsLeft>
                <S.MetricsRight>
                  <S.MetricsTopicOrder>
                    No.{topic.id}
                  </S.MetricsTopicOrder>
                </S.MetricsRight>
                <S.ModalContentsBg />
              </S.Metrics>
            ))}
          </S.ModalContents>
        </S.ModalContainer>
      </S.Content>
    </Modal>
  );
};

export default SummaryModal;
