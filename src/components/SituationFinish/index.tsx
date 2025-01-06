import React from "react";
import { useNavigate } from "react-router-dom";
import useModal from "../../hooks/useModal";
import SummaryModal from "./SummaryModal";
import * as S from "./styled";
import { TopicTip } from "../../types/topic";
import HomeIcon from "../../assets/icons/HomeIcon";
import Restart from "@assets/icons/re-start.svg";
import KaKao from "../../assets/icons/kakao_small.svg";
import Share from "../../assets/icons/share.svg";

interface FinishProps {
  topics: {
    id: number;
    content: string;
    isRecommend: boolean;
    tips: TopicTip[];
  }[];
}
const Finish: React.FC<FinishProps> = ({ topics }) => {
  const { isOpen, openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate(0);
  };

  const goToMain = () => {
    navigate("/");
  };

  return (
    <>
      <EmptyCircle />
      <S.Comment>
        랜덤 토픽 5개를 모두 살펴보셨네요
        <br />
        <S.CommentBold>새로운 토픽을 추가로 받아볼까요?</S.CommentBold>
      </S.Comment>

      <S.ButtonContainer>
        <S.HorizonDiv>
          <S.HandleNext onClick={goToMain}>
            <HomeIcon color="#FFFFFF" size={22} />

            <S.handleNextP>메인으로</S.handleNextP>
          </S.HandleNext>
          <S.HandleNext onClick={handleRestart}>
            <img src={Restart} />
            <S.handleNextP>다시하기</S.handleNextP>
          </S.HandleNext>
        </S.HorizonDiv>
        <S.SummaryBtn onClick={openModal}>요약 보기</S.SummaryBtn>
      </S.ButtonContainer>

      <S.Footer>
        <S.FooterP>
          대화가 즐거웠다면
          <br />
          친구에게도 <S.FooterStrong>“말해머해”</S.FooterStrong>를 알려주세요
          <S.ShareContainer>
            <S.ShareImage src={KaKao} />
            <S.ShareImage src={Share} />
          </S.ShareContainer>
        </S.FooterP>
      </S.Footer>
      <SummaryModal isOpen={isOpen} closeModal={closeModal} topics={topics} />
    </>
  );
};

export default Finish;

const EmptyCircle = () => {
  return (
    <S.EmptyCircleContainer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141 141" fill="none">
        <circle
          cx="70.5"
          cy="70.5"
          r="69.5"
          stroke="#97B2FF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="8 16"
        />
      </svg>
      <S.EmptyLabel>텅</S.EmptyLabel>
    </S.EmptyCircleContainer>
  );
};
