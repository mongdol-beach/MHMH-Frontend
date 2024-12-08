export interface Topic {
  id: number;
  content: string;
  tips: TopicTip[];
  situationType: string;
  situationName: string;
}

export interface TopicTip {
  title: string;
  content: string;
}
