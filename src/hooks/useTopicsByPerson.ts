import { useQuery } from "@tanstack/react-query";
import { instance } from "../apis/axios";
import { Topic } from "../types/person";
import { SituationColor } from "../types/topic";

interface TopicsByPersonResponse {
   situationName: string;
  situationColor: SituationColor;
  topics: Topic[];
}

export const useTopicsByPerson = (situationId:string) => {
  return useQuery<TopicsByPersonResponse>({
    queryKey: ["topicsByPerson",situationId], // 더 명확한 queryKey
    queryFn: () =>
      instance.get(`/topic/situation/person/${situationId}`).then((res) => res.data),
    refetchOnWindowFocus: false,
  });
};