import Header from "../Header";
import * as S from "./styled";
import PAGE_PATH from "../../constants/path";
import Loading from "../Loading";
import { usePerson } from "../../hooks/usePerson";

const Peroson = () => {
  const { data, isLoading } = usePerson();
  const situations = data?.situations ?? [];

  if (isLoading)
    return (
      <>
        <Header title="인물별 토픽" />
        <Loading />
      </>
    );

  return (
    <>
      <Header title="인물별 토픽" />
      <S.Main>
        <S.DescriptionBox>
          <S.Description>
            원하는 인물에 맞는
            <br />
            <S.DescriptionBold>
              토픽 {situations.length}가지를 추천
            </S.DescriptionBold>
            해줄게요
          </S.Description>
        </S.DescriptionBox>
        <S.PersonBox>
          {situations.map((situation) => (
            <S.PersonItem key={situation.id}>
              <S.PersonLink
                to={`${PAGE_PATH.TOPICS_BY_PERSON}/${situation.id}`}
              >
                {situation.title}
              </S.PersonLink>
            </S.PersonItem>
          ))}
        </S.PersonBox>
      </S.Main>
    </>
  );
};

export default Peroson;
