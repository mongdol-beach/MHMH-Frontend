import Header from "../Header";
import * as S from "./styled";
import RandomTopicCards from "../RandomTopicCards";
import { Suspense } from "react";
import Loading from "../Loading";

const RandomTopics = () => {
  return (
    <>
      <Header title="랜덤 토픽 추천" />
      <Suspense fallback={<Loading />}>
        <S.Main>
          <S.TopicCardsContainer>
            <RandomTopicCards />
          </S.TopicCardsContainer>
        </S.Main>
      </Suspense>
    </>
  );
};

export default RandomTopics;
