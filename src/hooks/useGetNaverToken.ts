import { useMutation } from "@tanstack/react-query";
import { getNaverToken } from "../apis/api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants/token";
import PAGE_PATH from "../constants/path";

export const useGetNaverToken = () => {
  const navigation = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (code: string) => getNaverToken(code),
    onSuccess: (tokens) => {
      localStorage.setItem(ACCESS_TOKEN, tokens.accessToken);
      localStorage.setItem(REFRESH_TOKEN, tokens.refreshToken);
      navigation(PAGE_PATH.MAIN);
    },
    throwOnError: true,
  });

  return { mutate };
};
