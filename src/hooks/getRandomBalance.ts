import { useQuery, useMutation } from "@tanstack/react-query";
import { instance } from "../apis/axios";
import { Questions, SelectQuestions } from "../types/balance";

interface RandomBalanceResponse {
  questions: Questions[];
}

interface SelectDataBalance {
  selectedOption: SelectQuestions;
}

export const useRandomBalance = () => {
  return useQuery<RandomBalanceResponse, Error>({
    queryKey: ["randomBalance"],
    queryFn: async () =>
      await instance.get("/balance-game/questions").then((res) => res.data),
  });
};

export const usePercentBalance = () => {
  return useMutation<SelectDataBalance, Error, { id: number; answer: string }>({
    mutationFn: async ({ id, answer }) => {
      const response = await instance.post(
        `/balance-game/questions/${id}/answer`,
        { answer },
      );
      console.log(response.data);
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
