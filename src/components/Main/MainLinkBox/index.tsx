import * as S from "./styled";
import MainLink from "./MainLink";
import PAGE_PATH from "../../../constants/path";
import { COLORS } from "../../../styles/color";
import MainEffect1 from "@assets/icons/main-effect1.svg";
import MainEffect2 from "@assets/icons/main-effect2.svg";
import MainEffect3 from "@assets/icons/main-effect3.svg";

export type ColorKey = keyof typeof COLORS;

export interface Topic {
  to: string;
  bgColor: ColorKey;
  subTitle: string;
  title: string;
  lineBreakTitle?: string;
  image: string;
  height: string;
}

const TOPICS: Topic[] = [
  {
    to: PAGE_PATH.TOPICS_RANDOM,
    bgColor: "--purple-300",
    subTitle: "색다른 대화",
    title: "랜덤",
    lineBreakTitle: "토픽 추천",
    image: MainEffect1,
    height: "10.25",
  },
  {
    to: PAGE_PATH.SITUATION,
    bgColor: "--Primary-blue-300",
    subTitle: "자연스러운 대화",
    title: "상황별",
    lineBreakTitle: "토픽 추천",
    image: MainEffect2,
    height: "10.25",
  },
  {
    to: PAGE_PATH["BALANCE-GAME"],
    bgColor: "--orange-300",
    subTitle: "재미있는 대화",
    title: "밸런스 게임",
    image: MainEffect3,
    height: "7.875",
  },
];

const MainLinkBox = () => {
  return (
    <S.LinkBox>
      <S.LinkTop>
        <MainLink topic={TOPICS[0]} />
        <MainLink topic={TOPICS[1]} />
      </S.LinkTop>
      <S.LinkBottom>
        <MainLink topic={TOPICS[2]} />
      </S.LinkBottom>
    </S.LinkBox>
  );
};

export default MainLinkBox;
