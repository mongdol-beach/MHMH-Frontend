import * as S from "./styled";
import KakaoIcon from "@assets/icons/kakao.svg";
import NaverIcon from "@assets/icons/naver.svg";
import GoogleIcon from "@assets/icons/google.svg";

const socialLoginList = [
  {
    text: "카카오",
    icon: KakaoIcon,
    textColor: "#000",
    backgroundColor: "#FEE500",
  },
  {
    text: "네이버",
    icon: NaverIcon,
    textColor: "#FFF",
    backgroundColor: "#03C75A",
  },
  {
    text: "Google",
    icon: GoogleIcon,
    textColor: "#000",
    backgroundColor: "#FFF",
    borderColor: "#C7C7C7",
  },
];

const LoginList = () => {
  return (
    <S.List>
      <S.Title>SNS 계정으로 3초만에 가입하기</S.Title>
      {socialLoginList.map((item) => {
        const { text, icon, textColor, backgroundColor, borderColor } = item;
        return (
          <S.Item>
            <S.SocialButton
              type="button"
              $textColor={textColor}
              $backgroundColor={backgroundColor}
              $borderColor={borderColor}
            >
              <S.Icon src={icon} alt={text} />
              <S.Text>{text}로 계속하기</S.Text>
            </S.SocialButton>
          </S.Item>
        );
      })}
    </S.List>
  );
};

export default LoginList;
