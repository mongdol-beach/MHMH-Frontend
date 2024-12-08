export const topicListKey = {
  all: ["topic-list"],
  details: () => [...topicListKey.all, "detail"],
  detail: (id: string) => [...topicListKey.details(), id],
} as const;
