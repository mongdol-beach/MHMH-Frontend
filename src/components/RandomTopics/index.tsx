import Header from "../Header";
import * as S from "./styled";
import RandomTopicCards from "../RandomTopicCards";

const RandomTopics = () => {
  return (
    <>
      <Header title="랜덤 토픽 추천" />
      <S.Main>
        <S.TopicCardsContainer>
          <RandomTopicCards />
        </S.TopicCardsContainer>
      </S.Main>
    </>
  );
};

export default RandomTopics;
