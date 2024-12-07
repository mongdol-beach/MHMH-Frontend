import * as S from "./styled";
import MainLink from "./MainLink";
import PAGE_PATH from "../../../constants/path";

const TOPICS = [
  {
    href: PAGE_PATH["RANDOM-TOPIC"],
    title: "랜덤 토픽",
    lineBreakTitle: "추천",
    width: "10.25",
    height: "10.25",
    text: "예측할 수 없는 다양한 주제로 색다른 대화 만들기",
  },
  {
    href: PAGE_PATH.TOPIC,
    title: "상황별 토픽",
    lineBreakTitle: "추천",
    width: "10.25",
    height: "10.25",
    text: "상황에 딱 맞는 맞춤 토픽으로 자연스러운 대화 만들기",
  },
  {
    href: PAGE_PATH["BALANCE-GAME"],
    title: "밸런스 게임",
    width: "21.4375",
    height: "7.875",
    text: "선택의 순간이 곧 대화의 시작! 흥미로운 게임으로 분위기 띄워 보기",
  },
];

const MainLinkBox = () => {
  return (
    <S.LinkBox>
      {TOPICS.map((topic, idx) => {
        const { href, title, lineBreakTitle, text, width, height } = topic;
        return (
          <MainLink
            key={idx}
            href={href}
            title={title}
            lineBreakTitle={lineBreakTitle}
            width={width}
            height={height}
            text={text}
          />
        );
      })}
    </S.LinkBox>
  );
};

export default MainLinkBox;
