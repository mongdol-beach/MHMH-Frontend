import { OAuthPlatform, Situation, TokenObject, TopicList } from ".././types";
import { instance } from "./axios";

export const getTopicList = async (
  situation: Situation,
): Promise<TopicList> => {
  const response = await instance.get(`/topic/situation/${situation}/all`);
  return response.data;
};

export const getOAuthToken = async (
  platform: OAuthPlatform,
  code: string,
): Promise<TokenObject> => {
  const response = await instance.get(
    `/login/oauth2/code/${platform}?code=${code}`,
  );
  return response.data;
};
