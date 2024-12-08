import { useQuery } from "@tanstack/react-query";
import { getTopicList } from "../apis/api";
import { topicListKey } from "../constants/queryKey";

export const useGetTopicList = (id: string) => {
  const { data } = useQuery({
    queryKey: topicListKey.detail(id),
    queryFn: () => getTopicList(id),
    enabled: !!id,
  });

  return { data };
};
