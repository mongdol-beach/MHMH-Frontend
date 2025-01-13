import Modal from "..";
import * as S from "./styled";
import Close from "@assets/icons/close.svg";
import SosoOn from "@assets/icons/soso-on.svg";
import SosoOff from "@assets/icons/soso-off.svg";
import BadOn from "@assets/icons/bad-on.svg";
import BadOff from "@assets/icons/bad-off.svg";
import GoodOn from "@assets/icons/good-on.svg";
import GoodOff from "@assets/icons/good-off.svg";
import { useState } from "react";
import { instance } from "../../../apis/axios";

interface FeedbackModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

type ToggleState = {
  good: boolean;
  soso: boolean;
  bad: boolean;
};

type IconType = keyof ToggleState;

type FeedbackType = "BAD" | "AVERAGE" | "EXCELLENT";

interface FeedbackRequest {
  type: FeedbackType;
  message: string;
}

const MAX_LENGTH = 1000;

const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isOpen,
  closeModal,
}) => {
  const [toggleStates, setToggleStates] = useState<ToggleState>({
    good: false,
    soso: false,
    bad: false,
  });

  const handleToggle = (iconType: IconType): void => {
    setToggleStates((prev) => {
      // 이미 선택된 아이콘을 다시 클릭한 경우
      if (prev[iconType]) {
        return {
          ...prev,
          [iconType]: false,
        };
      }

      // 다른 아이콘을 클릭한 경우
      return {
        good: false,
        soso: false,
        bad: false,
        [iconType]: true, // 새로 선택된 아이콘만 on
      };
    });
  };

  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= MAX_LENGTH) {
      setValue(newValue);
    }
  };

  const getFeedbackType = (): FeedbackType => {
    if (toggleStates.good) return "EXCELLENT";
    if (toggleStates.soso) return "AVERAGE";
    if (toggleStates.bad) return "BAD";
    return "AVERAGE";
  };

  const handleSubmit = async () => {
    try {
      const requestBody: FeedbackRequest = {
        type: getFeedbackType(),
        message: value,
      };

      await instance.post("/feedbacks", requestBody);
      handleCloseModal();
    } catch (error) {
      console.error("피드백 제출 실패:", error);
    }
  };

  const handleCloseModal = () => {
    // 상태 초기화
    setToggleStates({
      good: false,
      soso: false,
      bad: false,
    });
    setValue("");
    closeModal();
  };

  return (
    <>
      <Modal isOpen={isOpen} closeModal={handleCloseModal}>
        <S.CloseIcon src={Close} onClick={closeModal} />
        <S.ModalContainer>
          <S.ModalTitle>
            "말해머해"이용 후,
            <br /> 얼마나 만족하나요?
          </S.ModalTitle>
          <S.IconDiv>
            <S.IconButton onClick={() => handleToggle("good")}>
              <img
                src={toggleStates.good ? GoodOn : GoodOff}
                alt="말해뭐해 유저 피드백"
              />
            </S.IconButton>

            <S.IconButton onClick={() => handleToggle("soso")}>
              <img
                src={toggleStates.soso ? SosoOn : SosoOff}
                alt="말해뭐해 유저 피드백"
              />
            </S.IconButton>

            <S.IconButton onClick={() => handleToggle("bad")}>
              <img
                src={toggleStates.bad ? BadOn : BadOff}
                alt="말해뭐해 유저 피드백"
              />
            </S.IconButton>
          </S.IconDiv>
          <S.TextAreaWrapper>
            <S.TextArea
              value={value}
              onChange={handleChange}
              maxLength={MAX_LENGTH}
              placeholder="여러분의 사용 후기가 궁금해요!
앞으로 더 나아질 말해머해를 위해 자유롭게 의견을 공유해주세요."
            />
            <S.CharacterCount>
              {value.length}/{MAX_LENGTH}
            </S.CharacterCount>
          </S.TextAreaWrapper>
          <S.FeedBackBtn onClick={handleSubmit}>의견 보내기</S.FeedBackBtn>
        </S.ModalContainer>
      </Modal>
    </>
  );
};

export default FeedbackModal;
