export interface Topic {
    id: number;
    content: string;
    isRecommend: boolean;
    tips: TopicTip[];
    situationType: string;
    situationName: string;
  }
  
  export interface TopicTip {
    title: string;
    content: string;
  }
  