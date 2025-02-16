import { useState } from "react";
import Header from "./Header";
import * as S from "./styled";
import PAGE_PATH from "../../constants/path";
import {
  useRandomBalance,
  usePercentBalance,
  SelectedPercentage,
} from "../../hooks/getRandomBalance";
import { useQueryClient } from "@tanstack/react-query";
import Loading from "../Loading";
import { Helmet } from "react-helmet-async";

const BALANCE_GAME_MAX_NUM = 5;

const BalanceGame = () => {
  const { data, isLoading } = useRandomBalance();
  const { mutateAsync } = usePercentBalance();
  const [num, setNum] = useState(0);
  const [selectedPercentage, setSelectedPercentage] =
    useState<SelectedPercentage | null>(null);
  const [clickedOption, setClickedOption] = useState<string | null>(null);
  const [isOptionLocked, setIsOptionLocked] = useState(false);
  const [isRetryVisible, setIsRetryVisible] = useState(false);
  const progressPercentage = Math.floor(
    ((num + 1) / BALANCE_GAME_MAX_NUM) * 100,
  );

  const balance = data?.questions ?? [];
  const currentQuestion = balance[num];
  const queryClient = useQueryClient();

  const handleRetry = async () => {
    await queryClient.invalidateQueries({ queryKey: ["randomBalance"] });
    setNum(0);
    setSelectedPercentage(null);
    setIsOptionLocked(false);
    setClickedOption(null);
    setIsRetryVisible(false);
  };

  const handleSelectOption = async (option: string, id: number) => {
    if (clickedOption) return;

    setClickedOption(option);
    setIsOptionLocked(true);
    const data = await mutateAsync({ id, selectedOption: option });
    setSelectedPercentage(data);

    if (num + 1 === BALANCE_GAME_MAX_NUM) {
      // 마지막 질문인 경우
      setTimeout(() => {
        setIsRetryVisible(true);
      }, 1500);
    } else {
      // 다음 질문으로 진행
      setTimeout(() => {
        setNum((prev) => prev + 1);
        setSelectedPercentage(null);
        setClickedOption(null);
        setIsOptionLocked(false);
      }, 2500);
    }
  };

  if (isLoading)
    return (
      <>
        <Header />
        <Loading />
      </>
    );

  return (
    <>
      <Helmet>
        <title>밸런스게임 | 말해머해</title>
      </Helmet>
      <Header />
      <S.Main>
        <S.ProgressBarBox>
          <S.ProgressBar>
            <S.ProgressFill $progressPercentage={progressPercentage} />
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
                  onClick={() => handleSelectOption("A", currentQuestion.id)}
                  $isClicked={clickedOption === "A"}
                  $isOtherClicked={clickedOption === "B"}
                  disabled={isOptionLocked}
                >
                  {currentQuestion.optionA}
                  {selectedPercentage?.optionA !== undefined && (
                    <S.PercentText $isClicked={clickedOption === "A"}>
                      {`${selectedPercentage.optionA}%`}
                    </S.PercentText>
                  )}
                </S.Option>
                <S.ComparisonText>VS</S.ComparisonText>
                <S.Option
                  onClick={() => handleSelectOption("B", currentQuestion.id)}
                  $isClicked={clickedOption === "B"}
                  $isOtherClicked={clickedOption === "A"}
                  disabled={isOptionLocked}
                >
                  {currentQuestion.optionB}
                  {selectedPercentage?.optionB !== undefined && (
                    <S.PercentText $isClicked={clickedOption === "B"}>
                      {`${selectedPercentage.optionB}%`}
                    </S.PercentText>
                  )}
                </S.Option>
              </S.OptionBox>
            </>
          )}
        </S.DescriptionBox>
        {num + 1 === BALANCE_GAME_MAX_NUM &&
          clickedOption &&
          isRetryVisible && (
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
