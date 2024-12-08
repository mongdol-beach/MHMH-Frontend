import Header from "../Header";
import * as S from "./styled";
import PAGE_PATH from "../../constants/path";
import { useEffect, useState } from "react";
import axios from "axios";

interface Situation {
  id: string;
  title: string;
  color: string;
  textColor: string;
}

const Situation = () => {
  const [situations, setSituations] = useState<Situation[]>([]); // 상태 관리
  useEffect(() => {
    // Axios로 API 요청 보내기
    axios
      .get("https://mhmh-backend.fly.dev/situation")
      .then((response) => {
        setSituations(response.data.situations);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
