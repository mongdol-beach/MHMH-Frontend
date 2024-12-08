import Header from "../Header";
import TopicCards from "../TopicCards";
import * as S from "./styled";
import { useRandomTopics } from "../../hooks/getRandomTopics";
import { useState } from "react";
import Finish from "../SituationFinish";

const RandomTopics = () => {
  const { data } = useRandomTopics();
  const [hasViewedAllCards, setHasViewedAllCards] = useState(false);

  const topics = data?.topics || [];

  return (
    <>
      <Header title="랜덤 토픽 추천" />
      <S.Main>
        <S.TopicCardsContainer>
          {hasViewedAllCards ? (
            <Finish topics={topics} />
          ) : (
            <TopicCards
              topics={topics}
              onHasViewedAllCards={setHasViewedAllCards}
            />
          )}
        </S.TopicCardsContainer>
      </S.Main>
    </>
  );
};

export default RandomTopics;
