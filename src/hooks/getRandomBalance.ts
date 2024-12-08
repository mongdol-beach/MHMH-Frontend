import { useQuery, useMutation } from "@tanstack/react-query";
import { instance } from "../apis/axios";
import { Questions } from "../types/balance";

interface RandomBalanceResponse {
  questions: Questions[];
}

export const useRandomBalance = () => {
  return useQuery<RandomBalanceResponse, Error>({
    queryKey: ["randomBalance"],
    queryFn: async () =>
      await instance.get("/balance-game/questions").then((res) => res.data),
  });
};

export interface SelectedPercentage {
  optionA: number;
  optionB: number;
}

export const usePercentBalance = () => {
  return useMutation<
    SelectedPercentage,
    Error,
    { id: number; selectedOption: string }
  >({
    mutationFn: async ({ id, selectedOption }) => {
      const response = await instance.post(
        `/balance-game/questions/${id}/answer`,
        { selectedOption },
      );
      return response.data;
    },
    onSuccess: (data) => {
      console.log("Answer submitted successfully:", data);
    },
    onError: (error) => {
      console.error("Error submitting answer:", error);
    },
  });
};
