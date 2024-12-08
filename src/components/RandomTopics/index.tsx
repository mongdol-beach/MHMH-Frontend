import Header from "../Header";
import TopicCards from "../TopicCards";
import * as S from "./styled";
import { useRandomTopics } from "../../hooks/getRandomTopics";
import { RANDOM_TOPICS } from "./data";

const RandomTopics = () => {
  const { data, isError } = useRandomTopics();
  // TODO: isError 처리
  // useRandomTopics 에러가 나도 isError가 그대로 false여서 임시로 이렇게 처리
  const topics = isError ? RANDOM_TOPICS : (data?.topics ?? []);

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
