import { useSuspenseQuery } from "@tanstack/react-query";
import { getTopicList } from "../apis/api";
import { topicListKey } from "../constants/queryKey";
import { Situation } from "../types";

export const useGetTopicList = (situation: Situation) => {
  const { data, isLoading } = useSuspenseQuery({
    queryKey: topicListKey.detail(situation),
    queryFn: () => getTopicList(situation),
  });

  return { data, isLoading };
};
