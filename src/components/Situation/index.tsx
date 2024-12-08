import { SITUATIONS } from "./data";
import Header from "../Header";
import * as S from "./styled";

const Situation = () => {
  return (
    <>
      <Header title="상황별 토픽" />
      <S.Main>
        <S.DescriptionBox>
          <S.Description>
            원하는 상황에 맞는
            <br />
            <S.DescriptionBold>토픽 5가지를 추천</S.DescriptionBold>해줄게요
          </S.Description>
        </S.DescriptionBox>
        <S.SituationBox>
          {SITUATIONS.map((situation, idx) => (
            <S.SituationItem key={idx}>
              <S.SituationLink to={situation.to}>
                {situation.text}
              </S.SituationLink>
            </S.SituationItem>
          ))}
        </S.SituationBox>
      </S.Main>
    </>
  );
};

export default Situation;
