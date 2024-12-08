import * as S from "./styled";
import loadingImage from "../../assets/images/loading.gif";

export default function Loading() {
  return (
    <S.LoadingContainer>
      <S.LoadingImage src={loadingImage} alt="로딩 이미지" />
      <S.LoadingText>조금만 기다려 주세요!</S.LoadingText>
      <S.LoadingTitle>완벽한 토픽을 고르는 중…</S.LoadingTitle>
    </S.LoadingContainer>
  );
}
