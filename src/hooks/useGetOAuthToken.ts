import { OAuthPlatform } from "../types";
import { useGetKakaoToken } from "./useGetKakaoToken";
import { useGetNaverToken } from "./useGetNaverToken";

const useGetOAuthToken = (platform: OAuthPlatform) => {
  const { mutate: kakaoMutate } = useGetKakaoToken();
  const { mutate: naverMutate } = useGetNaverToken();

  switch (platform) {
    case "kakao":
      return kakaoMutate;
    // TODO: 구글 Mutate 추가 예정
    // case "google":
    //   return naverMutate;
    default:
      return naverMutate;
  }
};

export default useGetOAuthToken;
