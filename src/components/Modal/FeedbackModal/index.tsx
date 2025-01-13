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

const MAX_LENGTH = 400;

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
      // 모든 상태를 false로 초기화한 후, 선택된 아이콘만 true로 설정
      const newState = {
        good: false,
        soso: false,
        bad: false,
      };

      // 이미 선택된 아이콘을 다시 클릭하면 모두 off
      if (prev[iconType]) {
        return newState;
      }

      // 새로운 아이콘을 선택하면 해당 아이콘만 on
      newState[iconType] = true;
      return newState;
    });
  };

  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= MAX_LENGTH) {
      setValue(newValue);
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
          <S.FeedBackBtn>의견 보내기</S.FeedBackBtn>
        </S.ModalContainer>
      </Modal>
    </>
  );
};

export default FeedbackModal;
