import { useQuery } from "@tanstack/react-query";
import { instance } from "../apis/axios";
import { Topic } from "../types/topic";

export const useRandomTopics = () => {
  return useQuery<{ topics: Topic[] }>({
    queryKey: ["randomTopics"],
    queryFn: async () => await instance.get("/topic").then((res) => res.data),
  });
};
