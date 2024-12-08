import { useQuery } from "@tanstack/react-query";
import { instance } from "../apis/axios";
import { Topic } from "../types/topic";

interface RandomTopicsResponse {
  topics: Topic[];
}

export const useRandomTopics = () => {
  return useQuery<RandomTopicsResponse, Error>({
    queryKey: ["randomTopics"],
    queryFn: async () => await instance.get("/topic").then((res) => res.data),
  });
};
