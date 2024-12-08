import { useQuery } from "@tanstack/react-query";
import { Topic } from "../types/topic";
import { instance } from "../apis/axios";

interface TopicsBySituationResponse {
  topics: Topic[];
}

export const useTopicsBySituation = (situationId: string) => {
  return useQuery<TopicsBySituationResponse>({
    queryKey: ["topicsBySituation", situationId],
    queryFn: () =>
      instance.get(`/topic/situation/${situationId}`).then((res) => res.data),
  });
};
