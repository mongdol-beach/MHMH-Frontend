import { useNavigate } from "react-router-dom";
import { getOAuthToken } from "../apis/api";
import PAGE_PATH from "../constants/path";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants/token";
import { OAuthPlatform } from "../types";
import { useMutation } from "@tanstack/react-query";

const useGetOAuthToken = (platform: OAuthPlatform) => {
  const navigation = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (code: string) => getOAuthToken(platform, code),
    onSuccess: (tokens) => {
      localStorage.setItem(ACCESS_TOKEN, tokens.accessToken);
      localStorage.setItem(REFRESH_TOKEN, tokens.refreshToken);
      navigation(PAGE_PATH.MAIN);
    },
    throwOnError: true,
  });

  return { mutate };
};

export default useGetOAuthToken;
