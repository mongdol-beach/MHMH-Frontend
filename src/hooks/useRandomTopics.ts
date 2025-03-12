import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { instance } from "../apis/axios";
import { SituationColor, Topic } from "../types/topic";

interface RandomTopicsResponse {
  topics: Topic[];
  page: number;
  totalPage: number;
  situationName: string;
  situationColor: SituationColor;
}

export const useRandomTopics = () => {
  return useSuspenseInfiniteQuery<RandomTopicsResponse, Error>({
    queryKey: ["randomTopics"],
    queryFn: async ({ pageParam = 1 }) =>
      await instance
        .get("/topic", { params: { page: pageParam, size: 20 } })
        .then((res) => res.data),
    getNextPageParam: (pagination) => {
      if (pagination.page >= pagination.totalPage) return undefined;
      return pagination.page + 1;
    },
    initialPageParam: 1,
    refetchOnWindowFocus: false,
  });
};

export default useRandomTopics;
