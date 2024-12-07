import { useState } from "react";

import * as S from "./styled";

import { topics } from "./data";
import Header from "../Header";

const TopicBySituation = () => {
  const topicsLengthToShow = 3;
  const [currentIndex, setCurrentIndex] = useState(0);

  const topicsToShow = topics.slice(
    currentIndex,
    currentIndex + topicsLengthToShow,
  );

  const handleNextCard = () => {
    if (currentIndex < topics.length - topicsLengthToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <Header title="소개팅 토픽" />
      <S.Main>
        <S.SituationBox>
          <S.Situation>#소개팅</S.Situation>
          <S.ViewAllTopicsButton>전체 토픽 둘러보기 &gt;</S.ViewAllTopicsButton>
        </S.SituationBox>
        <S.CardStackContainer onClick={handleNextCard}>
          <S.CardStack>
            {topicsToShow.map((topic, index) => (
              <S.StackedCard
                key={`${topic}-${index}`}
                order={(index + 1) as 1 | 2 | 3}
              >
                {topic}
              </S.StackedCard>
            ))}
          </S.CardStack>
        </S.CardStackContainer>
      </S.Main>
    </>
  );
};

export default TopicBySituation;
