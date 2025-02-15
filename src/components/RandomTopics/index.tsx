import Header from "../Header";
import * as S from "./styled";
import { Suspense } from "react";
import Loading from "../Loading";
import RandomTopicCards from "../RandomTopicCards";

const RandomTopics = () => {
  return (
    <>
      <Header title="랜덤 토픽 추천" />
      <Suspense fallback={<Loading />}>
        <S.Main>
          <S.TopicCardsContainer>
            <RandomTopicCards
              situationName=""
              situationColor={{
                boldColor: "",
                mainCardColor: "",
                backCardColor: "",
                backgroundColor: "",
              }}
            />
          </S.TopicCardsContainer>
        </S.Main>
      </Suspense>
    </>
  );
};

export default RandomTopics;
