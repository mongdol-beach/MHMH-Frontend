import { Situation, TopicList } from "../types";
import { instance } from "./axios";

export const getTopicList = async (
  situation: Situation,
): Promise<TopicList> => {
  const response = await instance.get(
    `/topic/situation/${situation.toUpperCase()}/all`,
  );
  return response.data;
};
