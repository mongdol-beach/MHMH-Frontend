import { useSuspenseQuery } from "@tanstack/react-query";
import { getPersonTopicList } from "../apis/api";
import { topicListKey } from "../constants/queryKey";
import { Situation } from "../types";

export const useGetPersonTopicList = (situation: Situation) => {
  const { data } = useSuspenseQuery({
    queryKey: topicListKey.detail(situation),
    queryFn: () => getPersonTopicList(situation),
  });

  return { data };
};
