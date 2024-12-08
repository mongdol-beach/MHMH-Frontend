import Header from "../Header";
import TopicCards from "../TopicCards";
import * as S from "./styled";
import { useRandomTopics } from "../../hooks/getRandomTopics";
import { RANDOM_TOPICS } from "./data";

const RandomTopics = () => {
  const { data, isError, error } = useRandomTopics();

  if (isError) {
    console.error("Random topics fetch error:", error);
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
  }

  const topics = data?.topics ?? [];

  return (
    <>
      <Header title="랜덤 토픽 추천" />
      <S.Main>
        <S.TopicCardsContainer>
          <TopicCards topics={topics} />
        </S.TopicCardsContainer>
      </S.Main>
    </>
  );
};

export default RandomTopics;
