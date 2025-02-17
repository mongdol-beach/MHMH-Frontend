export interface Topic {
  id: number;
  content: string;
  isRecommend: boolean;
  tips: TopicTip[];
  situationType: string;
  situationName: string;
  situationColor: SituationColor;
}

export interface TopicTip {
  title: string;
  content: string;
}

export interface SituationColor {
  backCardColor: string;
  backgroundColor: string;
  boldColor: string;
  mainCardColor: string;
}
