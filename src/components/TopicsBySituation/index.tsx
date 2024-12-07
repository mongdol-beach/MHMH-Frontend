import * as S from "./styled";

import Header from "../Situation/Header";

const TopicBySituation = () => {
  const cards = Array(5).fill(null);

  return (
    <>
      <Header />
      <S.Main>
        <S.SituationBox>
          <S.Situation>#소개팅</S.Situation>
          <S.ViewAllTopicsButton>전체 토픽 둘러보기 &gt;</S.ViewAllTopicsButton>
        </S.SituationBox>
        <S.CardStackContainer>
          <S.CardStack>
            {cards.map((_, index) => (
              <S.Card key={index} order={index} />
            ))}
          </S.CardStack>
        </S.CardStackContainer>
      </S.Main>
    </>
  );
};

export default TopicBySituation;
