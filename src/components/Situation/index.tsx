import Header from "./Header";
import * as S from "./styled";

const Situation = () => {
  return (
    <>
      <Header />
      <S.Main>
        <S.DescriptionBox>
          <S.Description>
            토픽 추천이 필요한
            <br />
            상황을 선택 해주세요
          </S.Description>
        </S.DescriptionBox>
      </S.Main>
    </>
  );
};

export default Situation;
