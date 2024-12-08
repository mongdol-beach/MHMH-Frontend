export interface Topic {
  id: number;
  content: string;
  isRecommend: boolean;
  tips: {
    title: string;
    content: string[];
  };
}

export interface TopicList {
  topics: Topic[];
}
