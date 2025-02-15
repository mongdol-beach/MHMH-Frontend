import * as S from "./styled";
import Header from "../Header";
import TopicCards from "../TopicCards";
import { useTopicsBySituation } from "../../hooks/useTopicsBySituation";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Finish from "../SituationFinish";
import ShortArrow from "@assets/icons/short-arrow.svg";
import Loading from "../Loading";
import { SituationColor } from "../../types/topic";

const TopicsBySituation = () => {
  const { situationId } = useParams();
  const { data, isLoading } = useTopicsBySituation(situationId || "");
  const [hasViewedAllCards, setHasViewedAllCards] = useState(false);

  const situationName = data?.situationName;
  const situationColor = data?.situationColor;

  if (!situationId) {
    console.error("situationId is not defined");
    return null;
  }

  if (isLoading)
    return (
      <>
        <Header title="상황별 토픽 추천" />
        <Loading />
      </>
    );

  return (
    <>
      <Header title="상황별 토픽 추천" />
      <S.Main $situationColor={situationColor as SituationColor}>
        <S.SituationBox>
          <S.Situation>#{situationName}</S.Situation>
          <Link to={`/topic-list/${situationId}`}>
            <S.ViewAllTopicsButton>
              토픽 둘러보기
              <S.Icon src={ShortArrow} alt="토픽 둘러보기 아이콘" />
            </S.ViewAllTopicsButton>
          </Link>
        </S.SituationBox>
        {hasViewedAllCards ? (
          <Finish
            topics={data?.topics || []}
            situationName={situationName}
            $situationColor={situationColor as SituationColor}
          />
        ) : (
          <TopicCards
            topics={data?.topics || []}
            onHasViewedAllCards={setHasViewedAllCards}
            situationColor={situationColor as SituationColor}
            situationName={data?.situationName || ""}
          />
        )}
      </S.Main>
    </>
  );
};

export default TopicsBySituation;
