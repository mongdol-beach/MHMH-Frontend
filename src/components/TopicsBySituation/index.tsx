import * as S from "./styled";
import Header from "../Header";
import TopicCards from "../TopicCards";
import { topics } from "./data";

const TopicsBySituation = () => {
  return (
    <>
      <Header title="소개팅 토픽" />
      <S.Main>
        <S.SituationBox>
          <S.Situation>#소개팅</S.Situation>
          <S.ViewAllTopicsButton>전체 토픽 둘러보기 &gt;</S.ViewAllTopicsButton>
        </S.SituationBox>
        <TopicCards topics={topics} />
      </S.Main>
    </>
  );
};

export default TopicsBySituation;
