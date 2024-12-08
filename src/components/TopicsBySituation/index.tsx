import * as S from "./styled";
import Header from "../Header";
import TopicCards from "../TopicCards";
import { useTopicsBySituation } from "../../hooks/useTopicsBySituation";
import { useParams } from "react-router-dom";
import { useState } from "react";

const TopicsBySituation = () => {
  const { situationId } = useParams();
  const { data } = useTopicsBySituation(situationId || "");
  const [hasViewedAllCards, setHasViewedAllCards] = useState(false);

  if (!situationId) {
    console.error("situationId is not defined");
    return null;
  }

  return (
    <>
      <Header title="소개팅 토픽" />
      <S.Main>
        <S.SituationBox>
          <S.Situation>#소개팅</S.Situation>
          <S.ViewAllTopicsButton>전체 토픽 둘러보기 &gt;</S.ViewAllTopicsButton>
        </S.SituationBox>
        <TopicCards
          topics={data?.topics || []}
          onHasViewedAllCards={setHasViewedAllCards}
        />
      </S.Main>
    </>
  );
};

export default TopicsBySituation;
