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
import toast from "react-hot-toast";
import Modal from "..";

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
  const [value, setValue] = useState("");

  const handleToggle = (iconType: IconType): void => {
    setToggleStates((prev) => {
      if (prev[iconType]) {
        return {
          ...prev,
          [iconType]: false,
        };
      }

      const defaultFeedbackState = { good: false, soso: false, bad: false };
      return {
        ...defaultFeedbackState,
        [iconType]: true,
      };
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= MAX_LENGTH) {
      setValue(newValue);
    }
  };

  const getFeedbackType = (feedbackState: ToggleState): FeedbackType => {
    if (feedbackState.good) return "EXCELLENT";
    if (feedbackState.soso) return "AVERAGE";
    if (feedbackState.bad) return "BAD";
    return "AVERAGE";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const requestBody: FeedbackRequest = {
        type: getFeedbackType(toggleStates),
        message: value,
      };

      await instance.post("/feedbacks", requestBody);
      handleCloseModal();
    } catch (error) {
      console.log(error)
      toast.error("전송에 실패했습니다.");
    }
  };

  const handleCloseModal = () => {
    setToggleStates({
      good: false,
      soso: false,
      bad: false,
    });
    setValue("");
    closeModal();
  };

  return (

    <Modal isOpen={isOpen}>
      <S.Content>
        <S.CloseIcon src={Close} onClick={handleCloseModal} />
        <S.ModalContainer onSubmit={handleSubmit}>
          <S.ModalTitle>
            "말해머해"이용 후,
            <br /> 얼마나 만족하나요?
          </S.ModalTitle>
          <S.IconDiv>
            <S.IconButton type="button" onClick={() => handleToggle("good")}>
              <img
                src={toggleStates.good ? GoodOn : GoodOff}
                alt="말해뭐해 유저 피드백"
              />
            </S.IconButton>

            <S.IconButton type="button" onClick={() => handleToggle("soso")}>
              <img
                src={toggleStates.soso ? SosoOn : SosoOff}
                alt="말해뭐해 유저 피드백"
              />
            </S.IconButton>

            <S.IconButton type="button" onClick={() => handleToggle("bad")}>
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
          <S.FeedBackBtn type="submit">의견 보내기</S.FeedBackBtn>
        </S.ModalContainer>
      </S.Content>

    </Modal>
  );
};

export default FeedbackModal;
