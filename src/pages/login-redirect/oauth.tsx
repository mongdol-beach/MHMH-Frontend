import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useGetOAuthToken from "../../hooks/useGetOAuthToken";
import { getOAuthPlatformFromPath } from "../../utils/getOAuthPlatformFromPath";

const OAutRedirect = () => {
  const [searchParams] = useSearchParams();
  const platform = getOAuthPlatformFromPath(window.location.pathname);
  const mutate = useGetOAuthToken(platform);
  const oauthCode = searchParams.get("code");

  useEffect(() => {
    if (!oauthCode) {
      throw new Error("OAuth 로그인 코드가 없습니다.");
    }

    mutate(oauthCode);
  }, []);

  // TODO: 로그인 로딩 컴포넌트 생기면 변경 예정
  return <div>로그인 중 입니다..</div>;
};

export default OAutRedirect;
