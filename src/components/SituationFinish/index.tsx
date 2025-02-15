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
import { ensureHexColor } from "../Card";

export {}; // global 선언을 위해 필요

interface FinishProps {
  topics: {
    id: number;
    content: string;
    isRecommend: boolean;
    tips: TopicTip[];
  }[];
  situationName: string;
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
      await navigator.clipboard.writeText("https://mh-mh.vercel.app/");
      toast.success("링크가 복사되었습니다.");
    } catch (error) {
      toast.error("링크 복사에 실패했습니다.");
    }
  };

  const handleKakaoShare = () => {
    const kakaoJsKey = import.meta.env.VITE_KAKAO_JS_KEY;

    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(kakaoJsKey);
    }

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "말해머해",
        description: "대화 주제 추천 서비스, 말해머해를 체험해보세요!",
        imageUrl:
          "https://brick-william-6f5.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe321b4cb-8569-4a87-9b86-2845eb22f8d7%2Faa2b6f56-0316-4c2d-9674-3f3d013ef9f5%2Fog-image.png?table=block&id=1564e173-3f21-807f-90c2-f226ffed128b&spaceId=e321b4cb-8569-4a87-9b86-2845eb22f8d7&width=1420&userId=&cache=v2",
        link: {
          mobileWebUrl: "https://mh-mh.vercel.app/",
          webUrl: "https://mh-mh.vercel.app/",
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: "https://mh-mh.vercel.app/",
            webUrl: "https://mh-mh.vercel.app/",
          },
        },
      ],
    });
  };

  return (
    <>
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
            <img src={Restart} />
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
