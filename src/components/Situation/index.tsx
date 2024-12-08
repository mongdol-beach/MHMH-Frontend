import Header from "../Header";
import * as S from "./styled";
import PAGE_PATH from "../../constants/path";
import { useSituations } from "../../hooks/useSituations";
import Loading from "../Loading";

const Situation = () => {
  const { data, isLoading } = useSituations();
  const situations = data?.situations ?? [];

  if (isLoading)
    return (
      <>
        <Header title="상황별 토픽" />
        <Loading />
      </>
    );

  return (
    <>
      <Header title="상황별 토픽" />
      <S.Main>
        <S.DescriptionBox>
          <S.Description>
            원하는 상황에 맞는
            <br />
            <S.DescriptionBold>
              토픽 {situations.length}가지를 추천
            </S.DescriptionBold>
            해줄게요
          </S.Description>
        </S.DescriptionBox>
        <S.SituationBox>
          {situations.map((situation) => (
            <S.SituationItem key={situation.id}>
              <S.SituationLink
                to={`${PAGE_PATH.TOPICS_BY_SITUATION}/${situation.id}`}
              >
                {situation.title}
              </S.SituationLink>
            </S.SituationItem>
          ))}
        </S.SituationBox>
      </S.Main>
    </>
  );
};

export default Situation;
