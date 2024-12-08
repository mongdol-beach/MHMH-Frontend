import Header from "../Header";
import TopicCards from "../TopicCards";
import { RANDOM_TOPICS } from "./data";
import * as S from "./styled";

const RandomTopics = () => {
  return (
    <>
      <Header title="랜덤 토픽 추천" />
      <S.Main>
        <S.TopicCardsContainer>
          <TopicCards topics={RANDOM_TOPICS} />
        </S.TopicCardsContainer>
      </S.Main>
    </>
  );
};

export default RandomTopics;
