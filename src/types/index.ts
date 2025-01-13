export interface Tip {
    title: string;
    content: string[];
  }
  
  export interface Topic {
    id: number;
    content: string;
    isRecommend: boolean;
    tips: Tip[] | null;
  }
  
  export interface TopicList {
    situationId: string;
    situationName: string;
    topics: Topic[];
  }
  
  export type Situation =
    | "DATE"
    | "COMPANY"
    | "COFFEE"
    | "SMALL"
    | "TOGETHER"
    | "COUPLE";
  