import * as S from "./styled";
import KakaoIcon from "@assets/icons/kakao.svg";
import NaverIcon from "@assets/icons/naver.svg";
import GoogleIcon from "@assets/icons/google.svg";

const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;
const NAVER_API_KEY = import.meta.env.VITE_NAVER_API_KEY;
const NAVER_API_STATE = import.meta.env.VITE_NAVER_API_STATE;
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const socialLoginList = [
  {
    id: 1,
    text: "카카오",
    icon: KakaoIcon,
    textColor: "#000",
    backgroundColor: "#FEE500",
    url: `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${window.location.href}/kakao&response_type=code`,
  },
  {
    id: 2,
    text: "네이버",
    icon: NaverIcon,
    textColor: "#FFF",
    backgroundColor: "#03C75A",
    url: `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_API_KEY}&state=${NAVER_API_STATE}&redirect_uri=${window.location.href}/naver`,
  },
  {
    id: 3,
    text: "Google",
    icon: GoogleIcon,
    textColor: "#000",
    backgroundColor: "#FFF",
    borderColor: "#C7C7C7",
    url: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_API_KEY}&redirect_uri=${window.location.href}/google&response_type=code&scope=email profile`,
  },
];

const LoginList = () => {
  return (
    <S.List>
      <S.Title>SNS 계정으로 3초만에 가입하기</S.Title>
      {socialLoginList.map((item) => {
        const { id, text, icon, textColor, backgroundColor, borderColor, url } =
          item;
        return (
          <S.Item key={id}>
            <S.SocialButton
              to={url}
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
