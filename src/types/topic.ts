export interface Topic {
  id: number;
  content: string;
  isRecommend: boolean;
  tips: TopicTip[];
}

export interface TopicTip {
  title: string;
  content: string;
}
