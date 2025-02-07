import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useGetOAuthToken from "../../hooks/useGetOAuthToken";
import { getOAuthPlatformFromPath } from "../../utils/getOAuthPlatformFromPath";
import Loading from "../../components/Loading";

const OAutRedirect = () => {
  const [searchParams] = useSearchParams();
  const platform = getOAuthPlatformFromPath(window.location.pathname);
  const { mutate } = useGetOAuthToken(platform);
  const oauthCode = searchParams.get("code");

  useEffect(() => {
    if (!oauthCode) {
      throw new Error("OAuth 로그인 코드가 없습니다.");
    }

    mutate(oauthCode);
  }, []);

  return <Loading text="회원 정보를 불러오는 중..." />;
};

export default OAutRedirect;
