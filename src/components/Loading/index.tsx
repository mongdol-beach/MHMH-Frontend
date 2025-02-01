import * as S from "./styled";
import loadingImage from "../../assets/images/loading.gif";

interface LoadingProps {
  text?: string;
}

const defaultLoadingText = "완벽한 토픽을 고르는 중…";

export default function Loading({ text = defaultLoadingText }: LoadingProps) {
  return (
    <S.LoadingContainer>
      <S.LoadingImage src={loadingImage} alt="로딩 이미지" />
      <S.LoadingSubText>조금만 기다려 주세요!</S.LoadingSubText>
      <S.LoadingText>{text}</S.LoadingText>
    </S.LoadingContainer>
  );
}
