export interface Topic {
  id: number;
  content: string;
  tips: TopicTip[];
}

export interface TopicTip {
  title: string;
  content: string;
}
