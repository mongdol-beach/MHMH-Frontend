import { useQuery } from "@tanstack/react-query";
import { instance } from "../apis/axios";
import { SituationColor, Topic } from "../types/topic";

interface RandomTopicsResponse {
  topics: Topic[];
  situationColor: SituationColor;
}

export const useRandomTopics = () => {
  return useQuery<RandomTopicsResponse, Error>({
    queryKey: ["randomTopics"],
    queryFn: async () => await instance.get("/topic").then((res) => res.data),
  });
};
