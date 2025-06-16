// usePerson.ts
import { useQuery } from "@tanstack/react-query";
import { instance } from "../apis/axios";
import { Topic } from "../types/person";

interface PersonResponse {
  situations: Topic[];  // 수정: persons → situations
}

export const usePerson = () => {
  return useQuery<PersonResponse>({
    queryKey: ["person"],
    queryFn: async () => {
      try {
        const res = await instance.get("/situation/person");
        return res.data;
      } catch (error) {
        console.log("Error in queryFn:", error);
        throw error;
      }
    },
  });
};