import React from "react";
import { useNavigate } from "react-router-dom";
import useModal from "../../hooks/useModal";
import SummaryModal from "./SummaryModal";
import * as S from "./styled";

interface FinishProps {
  topics: {
    id: number;
    content: string;
    isRecommend: boolean;
    tips: string[];
  }[];
}

const Finish: React.FC<FinishProps> = ({ topics }) => {
  const { isOpen, openModal, closeModal } = useModal();
  const navigate = useNavigate(); // 라우터 내비게이션 훅

  const handleRestart = () => {
    navigate(0); // 토픽 페이지
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
        <S.reTryBtn onClick={handleRestart}>더 받아보기</S.reTryBtn>
        <S.SummaryBtn onClick={openModal}>끝내고 요약 보기</S.SummaryBtn>
      </S.ButtonContainer>
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
          stroke="#C7C7C7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="8 16"
        />
      </svg>
      <S.EmptyLabel>텅</S.EmptyLabel>
    </S.EmptyCircleContainer>
  );
};
