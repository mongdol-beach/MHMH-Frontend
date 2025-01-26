import { Situation, TokenObject, TopicList } from ".././types";
import { instance } from "./axios";

export const getTopicList = async (
  situation: Situation,
): Promise<TopicList> => {
  const response = await instance.get(`/topic/situation/${situation}/all`);
  return response.data;
};

export const getKakaoToken = async (code: string): Promise<TokenObject> => {
  const response = await instance.get(`/login/oauth2/code/kakao?code=${code}`);
  return response.data;
};
