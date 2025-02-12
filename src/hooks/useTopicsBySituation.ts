import { useQuery } from "@tanstack/react-query";
import { SituationColor, Topic } from "../types/topic";
import { instance } from "../apis/axios";

interface TopicsBySituationResponse {
  situationName: string;
  situationColor: SituationColor;
  topics: Topic[];
}

export const useTopicsBySituation = (situationId: string) => {
  return useQuery<TopicsBySituationResponse>({
    queryKey: ["topicsBySituation", situationId],
    queryFn: () =>
      instance.get(`/topic/situation/${situationId}`).then((res) => res.data),
  });
};
