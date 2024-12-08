import { TopicList } from "../types";
import { instance } from "./axios";

export const getTopicList = async (id: string): Promise<TopicList> => {
  const response = await instance.get(`/topic/situation/${id}`);
  return response.data;
};
