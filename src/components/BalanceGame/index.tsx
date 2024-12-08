import { useState } from "react";
import Header from "./Header";
import * as S from "./styled";
import PAGE_PATH from "../../constants/path";
import {
  useRandomBalance,
  usePercentBalance,
} from "../../hooks/getRandomBalance";
import { useQueryClient } from "@tanstack/react-query";

const BALANCE_GAME_MAX_NUM = 5;

const BalanceGame = () => {
  const { data, isError, error } = useRandomBalance();
  const { mutateAsync } = usePercentBalance();
  const [num, setNum] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const progressPercentage = Math.floor(
    ((num + 1) / BALANCE_GAME_MAX_NUM) * 100,
  );

  const balance = data?.questions ?? [];
  const currentQuestion = balance[num];
  const queryClient = useQueryClient();

  // 에러 처리
  if (isError) return <div>오류 발생: {error.message}</div>;

  const handleRetry = async () => {
    await queryClient.invalidateQueries({ queryKey: ["randomBalance"] });
    setNum(0);
  };

  const handleSelectOption = async () => {
    await 
  }


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
              {num + 1} / {BALANCE_GAME_MAX_NUM}
            </S.CounterText>
          </S.ProgressBarCounter>
        </S.ProgressBarBox>
        <S.DescriptionBox>
          {currentQuestion && (
            <>
              <S.Description key={currentQuestion.id}>
                {currentQuestion.description}
              </S.Description>
              <S.OptionBox>
                <S.Option
                  onClick={() =>
                    handleSelectOption(
                      currentQuestion.optionA,
                      currentQuestion.id,
                    )
                  }
                >
                  {currentQuestion.optionA}
                </S.Option>
                <S.ComparisonText>VS</S.ComparisonText>
                <S.Option
                  onClick={() =>
                    handleSelectOption(
                      currentQuestion.optionB,
                      currentQuestion.id,
                    )
                  }
                >
                  {currentQuestion.optionB}
                </S.Option>
              </S.OptionBox>
              {selectedOption && (
                <>
                  <div>
                    <div>선택한 옵션: {selectedOption}</div>
                    <div>선택한 퍼센트: {selectedPercentage}%</div>
                  </div>
                </>
              )}
            </>
          )}
        </S.DescriptionBox>
        {num + 1 === BALANCE_GAME_MAX_NUM && (
          <S.FinishBox>
            <S.ButtonBox>
              <S.RetryMainBox>
                <S.RetryButton onClick={handleRetry}>다시하기</S.RetryButton>
                <S.MainButtonLink to={PAGE_PATH.MAIN}>
                  메인으로
                </S.MainButtonLink>
              </S.RetryMainBox>
              <S.SituationButtonLink to={PAGE_PATH.SITUATION}>
                토픽 추천받아 대화 시작해보기
              </S.SituationButtonLink>
            </S.ButtonBox>
          </S.FinishBox>
        )}
      </S.Main>
    </>
  );
};
export default BalanceGame;
