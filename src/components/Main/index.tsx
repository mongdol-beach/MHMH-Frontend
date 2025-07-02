import * as S from "./styled";
import BackgroundEffect from "@assets/icons/main-background-effect.svg";
import MainLinkBox from "./MainLinkBox";
import MainLogoIcon from "@assets/icons/main-logo.svg";

const Main = () => {
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
        <S.CopyRight>
          Copyright ©mongdol-beach. All rights reserved.
        </S.CopyRight>
      </S.ContentBox>
      <S.BackgroundLeft />
    </S.Container>
  );
};

export default Main;
