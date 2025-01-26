import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetKakaoToken } from "../../hooks/useGetKakaoToken";

const KakaoRedirect = () => {
  const [searchParams] = useSearchParams();
  const { mutate } = useGetKakaoToken();
  const kakaoCode = searchParams.get("code");

  useEffect(() => {
    if (!kakaoCode) {
      throw new Error("카카오 로그인 코드가 없습니다.");
    }

    mutate(kakaoCode);
  }, []);

  return <div>로그인 중 입니다..</div>;
};

export default KakaoRedirect;
