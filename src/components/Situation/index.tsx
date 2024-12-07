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
            토픽 추천이 필요한
            <br />
            상황을 선택 해주세요
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
