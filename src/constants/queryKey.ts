import { Situation } from "../types";

export const topicListKey = {
  all: ["topic-list"],
  details: () => [...topicListKey.all, "detail"],
  detail: (situation: Situation) => [...topicListKey.details(), situation],
} as const;
