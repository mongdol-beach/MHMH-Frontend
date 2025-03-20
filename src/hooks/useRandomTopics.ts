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
const RANDOM_SEED = Math.floor(Math.random() * 10000) + 1;

export const useRandomTopics = () => {
  return useSuspenseInfiniteQuery<RandomTopicsResponse, Error>({
    queryKey: ["randomTopics", RANDOM_SEED], // 고정된 시드 사용
    queryFn: async ({ pageParam = 1 }) =>
      await instance
        .get("/topic", {
          params: {
            page: pageParam,
            size: 20,
            seed: RANDOM_SEED, // 고정된 시드 사용
          },
        })
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
