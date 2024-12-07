import * as S from "./styled";

import Header from "../Situation/Header";

const TopicBySituation = () => {
  return (
    <>
      <Header />
      <S.Main>
        <S.SituationBox>
          <S.Situation>#소개팅</S.Situation>
          <S.ViewAllTopicsButton>전체 토픽 둘러보기 &gt;</S.ViewAllTopicsButton>
        </S.SituationBox>
      </S.Main>
    </>
  );
};

export default TopicBySituation;
