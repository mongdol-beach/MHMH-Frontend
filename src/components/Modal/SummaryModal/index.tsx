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
  situationName?: string;
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

    <Modal isOpen={isOpen}>
      <S.Content>
        <S.CloseIcon src={Close} onClick={closeModal} />
        <S.ModalContainer>
        <S.ModalHeader $situationColor={situationColor}>
            <S.ModalHeaderLeft>
            <S.ModalHeader_title $situationColor={situationColor}>
              #{situationName}_토픽
            </S.ModalHeader_title>
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
              <S.Metrics key={idx} $situationColor={situationColor}>
                <S.MetricsLeft>
                  <S.MetricsCurrentOrder>
                    Q{idx + 1}
                  </S.MetricsCurrentOrder>
                  <S.MetricsTopic>
                    {topic.content}
                  </S.MetricsTopic>
                </S.MetricsLeft>
                <S.MetricsRight>
                  <S.MetricsTopicOrder $situationColor={situationColor}>
                    No.{topic.id}
                  </S.MetricsTopicOrder>
                </S.MetricsRight>
                <S.ModalContentsBg $situationColor={situationColor}/>
              </S.Metrics>
            ))}
          </S.ModalContents>
        </S.ModalContainer>
      </S.Content>
    </Modal>
  );
};

export default SummaryModal;
