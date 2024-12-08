import { useSuspenseQuery } from "@tanstack/react-query";
import { getTopicList } from "../apis/api";
import { topicListKey } from "../constants/queryKey";
import { Situation } from "../types";

export const useGetTopicList = (situation: string) => {
  const situationKey = situation.toUpperCase() as Situation;
  const { data } = useSuspenseQuery({
    queryKey: topicListKey.detail(situationKey),
    queryFn: () => getTopicList(situationKey),
  });

  return { data };
};
