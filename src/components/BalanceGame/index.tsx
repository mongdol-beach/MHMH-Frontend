import { useState } from "react";
import { BALANCEGAME } from "./data";
import Header from "./Header";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";

const BalanceGame = () => {
  const [num, setNum] = useState(0);
  const maxNum = 5;
  const progressPercentage = Math.floor(((num + 1) / maxNum) * 100);
  const navigate = useNavigate();

  const handleNextQuestion = () => {
    if (num + 1 < maxNum) {
      setNum(num + 1);
    }
  };

  const handleRetry = () => {
    setNum(0);
  };

  return (
    <>
      <Header />
      <S.Main>
        <S.ProgressBarBox>
          <S.ProgressBar>
            <S.ProgressFill progressPercentage={progressPercentage} />
          </S.ProgressBar>
          <S.ProgressBarCounter>
            <S.CounterText>
              {num + 1} / {maxNum}
            </S.CounterText>
          </S.ProgressBarCounter>
        </S.ProgressBarBox>
        <S.DescriptionBox>
          {BALANCEGAME.map((game, idx) =>
            idx === num ? (
              <>
                <S.Description key={idx}>{game.subject}</S.Description>
                <S.OptionBox>
                  <S.Option onClick={handleNextQuestion}>
                    {game.questionA}
                  </S.Option>
                  <S.ComparisonText>VS</S.ComparisonText>
                  <S.Option onClick={handleNextQuestion}>
                    {game.questionB}
                  </S.Option>
                </S.OptionBox>
              </>
            ) : null,
          )}
        </S.DescriptionBox>
        {num + 1 === maxNum && (
          <S.FinishBox>
            <S.ButtonBox>
              <S.RetryMainBox>
                <S.RetryButton onClick={handleRetry}>다시하기</S.RetryButton>
                <S.MainButton onClick={() => navigate("/")}>
                  메인으로
                </S.MainButton>
              </S.RetryMainBox>
              <S.SituationButtonBox>
                <S.SituationButton onClick={() => navigate("/situation")}>
                  토픽 추천받아 대화 시작해보기
                </S.SituationButton>
              </S.SituationButtonBox>
            </S.ButtonBox>
          </S.FinishBox>
        )}
      </S.Main>
    </>
  );
};
export default BalanceGame;
