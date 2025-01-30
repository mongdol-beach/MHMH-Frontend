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

export interface TokenObject {
  accessToken: string;
  refreshToken: string;
}

export type OAuthPlatform = "kakao" | "naver" | "google";
