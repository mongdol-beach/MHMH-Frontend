import { useQuery } from "@tanstack/react-query";
import { instance } from "../apis/axios";
import { Situation } from "../types/situation";

interface SituationResponse {
  situations: Situation[];
}

export const useSituations = () => {
  return useQuery<SituationResponse>({
    queryKey: ["situations"],
    queryFn: () => instance.get("/situation").then((res) => res.data),
  });
};
