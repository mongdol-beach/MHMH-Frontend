import { useQuery } from "@tanstack/react-query";
import { instance } from "../apis/axios";
import { Situation } from "../types/situation";

interface SituationResponse {
  situations: Situation[];
}

export const useSituations = () => {
  return useQuery<SituationResponse>({
    queryKey: ["situations"],
    queryFn: async () => {
      try {
        const res = await instance.get("/situation");
        return res.data;
      } catch (error) {
        console.log("Error in queryFn:", error);
        throw error; // 에러를 다시 throw
      }
    },
  });
};
