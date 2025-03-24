import * as S from "./styled";
import BackgroundEffect from "@assets/icons/main-background-effect.svg";
import MainLinkBox from "./MainLinkBox";
import MainLogoIcon from "@assets/icons/main-logo.svg";
import RightArrowIcon from "@assets/icons/right-arrow.svg";
import FeedbackModal from "../Modal/FeedbackModal";
import useModal from "../../hooks/useModal";

const Main = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <S.Container>
      <S.TitleBox>
        <S.SubTitle>대화가 어려운 당신을 위한</S.SubTitle>
        <S.Title>랜덤 토픽 생성기</S.Title>
        <S.LogoBox>
          <S.LogoIcon src={MainLogoIcon} alt="" />
          <S.LogoTitle>말해머해</S.LogoTitle>
        </S.LogoBox>
      </S.TitleBox>
      <S.ContentBox>
        <S.BackgroundEffect src={BackgroundEffect} />
        <S.Text>
          어색함, 공백 없이 <br />
          <S.TextBold>대화의 재미</S.TextBold>를 느껴봐요!
        </S.Text>
        <MainLinkBox />
        <S.HorizonLine />
        <S.UserFeedbackButton type="button" onClick={openModal}>
          사용 후기를 알려주세요!
          <S.ArrowIcon src={RightArrowIcon} />
        </S.UserFeedbackButton>
        <S.CopyRight>
          Copyright ©mongdol-beach. All rights reserved.
        </S.CopyRight>
      </S.ContentBox>
      <S.BackgroundLeft />
      <FeedbackModal isOpen={isOpen} closeModal={closeModal}></FeedbackModal>
    </S.Container>
  );
};

export default Main;
