import React from "react";
import useModal from "../../hooks/useModal";
import SummaryModal from "../Modal/SummaryModal";
import * as S from "./styled";
import Home from "../../assets/icons/HomeIcon";
import Restart from "../../assets/icons/re-start.svg";
import KaKao from "../../assets/icons/share-kakao.svg";
import Share from "../../assets/icons/share.svg";
import toast from "react-hot-toast";
import { TopicTip } from "../../types/topic";
import { KakaoShareOptions } from "../../types/kakao";
import { Helmet } from 'react-helmet-async';
import { ensureHexColor } from "../Card";
const BASE_URL = "https://mh-mh.vercel.app";
const KAKAOSHARE_URL = `${BASE_URL}/?utm_source=kakao&utm_medium=social&utm_campaign=share`;

interface FinishProps {
  topics: {
    id: number;
    content: string;
    isRecommend: boolean;
    tips: TopicTip[];
  }[];
  situationName?: string;
  $situationColor: {
    boldColor: string;
    mainCardColor: string;
    backCardColor: string;
    backgroundColor: string;
  };
}
const Finish: React.FC<FinishProps> = ({
  topics,
  situationName,
  $situationColor,
}) => {
  const { isOpen, openModal, closeModal } = useModal();
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(BASE_URL);
      toast.success("링크가 복사되었습니다.");
    } catch (error) {
      console.log(error)
      toast.error("링크 복사에 실패했습니다.");
    }
  };

  const handleKakaoShare = () => {
    const kakaoJsKey = import.meta.env.VITE_KAKAO_JS_KEY;




    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(kakaoJsKey);
    }

    const shareOptions: KakaoShareOptions = {
      objectType: "feed",
      content: {
        title: "말해머해",
        description: "대화 주제 추천 서비스, 말해머해를 체험해보세요!",
        imageUrl: "...",
        link: {
          mobileWebUrl: KAKAOSHARE_URL,
          webUrl: KAKAOSHARE_URL,
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: KAKAOSHARE_URL,
            webUrl: KAKAOSHARE_URL,
          },
        },
      ],
    };

    window.Kakao.Share.sendDefault(shareOptions);
  };

  return (
    <>
    <Helmet>
        <title>{`${situationName} 토픽 결과 | 말해머해`}</title>
      </Helmet>
      <EmptyCircle
        $situationColor={{
          mainCardColor: ensureHexColor($situationColor.mainCardColor),
          backCardColor: ensureHexColor($situationColor.backCardColor),
          boldColor: ensureHexColor($situationColor.boldColor),
          backgroundColor: ensureHexColor($situationColor.backgroundColor),
        }}
      />
      <S.Comment>
        랜덤 토픽 5개를 모두 살펴보셨네요
        <br />
        <S.CommentBold>새로운 토픽을 추가로 받아볼까요?</S.CommentBold>
      </S.Comment>

      <S.ButtonContainer>
        <S.HorizonDiv>
          <S.HandleNextLink to={"/"}>
            <Home color="#FFFFFF" size={22} />

            <S.handleNextP>메인으로</S.handleNextP>
          </S.HandleNextLink>

          <S.HandleNextLink to={"/situation"}>
            <img src={Restart} alt="상황 별 주제 다시하기" />
            <S.handleNextP>다시하기</S.handleNextP>
          </S.HandleNextLink>
        </S.HorizonDiv>
        <S.SummaryBtn onClick={openModal}>요약 보기</S.SummaryBtn>
      </S.ButtonContainer>

      <S.Footer>
        <S.FooterP>
          대화가 즐거웠다면
          <br />
          친구에게도 <S.FooterStrong>“말해머해”</S.FooterStrong>를 알려주세요
        </S.FooterP>
        <S.ShareContainer>
          <S.ShareImage
            data-gtm="kakao-share"
            src={KaKao}
            onClick={handleKakaoShare}
          />
          <S.ShareImage
            data-gtm="url-share"
            src={Share}
            onClick={handleShare}
          />
        </S.ShareContainer>
      </S.Footer>
      <SummaryModal
        isOpen={isOpen}
        closeModal={closeModal}
        topics={topics}
        situationName={situationName}
        situationColor={$situationColor}
      />
    </>
  );
};

export default Finish;

const EmptyCircle: React.FC<{
  $situationColor: FinishProps["$situationColor"];
}> = ({ $situationColor }) => {
  return (
    <S.EmptyCircleContainer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141 141" fill="none">
        <circle
          cx="70.5"
          cy="70.5"
          r="69.5"
          stroke={$situationColor?.boldColor}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="8 16"
        />
      </svg>
      <S.EmptyLabel $situationColor={$situationColor}>텅</S.EmptyLabel>
    </S.EmptyCircleContainer>
  );
};
