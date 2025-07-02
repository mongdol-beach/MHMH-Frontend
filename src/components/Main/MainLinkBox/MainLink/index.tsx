import * as S from "./styled";
import { Topic } from "..";

interface MainLinkProps {
  topic: Topic;
}

const MainLink = ({ topic }: MainLinkProps) => {
  const { to, bgColor, subTitle, title, lineBreakTitle, image, height } = topic;
  const isBalanceGame = title === "밸런스 게임";

  return (
    <S.Link $height={height} to={to}>
      <S.LinkBox>
        <S.TitleBox $isBalance={isBalanceGame}>
          <S.SubTitle $bgColor={bgColor}>{subTitle}</S.SubTitle>
          <S.Title>
            {title}
            <br />
            {lineBreakTitle}
          </S.Title>
        </S.TitleBox>
        <S.TopicImage src={image} alt="" $isBalance={isBalanceGame} />
      </S.LinkBox>
    </S.Link>
  );
};

export default MainLink;
