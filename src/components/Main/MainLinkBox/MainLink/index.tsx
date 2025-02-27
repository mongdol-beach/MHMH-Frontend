import * as S from "./styled";
import { Topic } from "..";

interface MainLinkProps {
  topic: Topic;
}

const MainLink = ({ topic }: MainLinkProps) => {
  const { to, bgColor, subTitle, title, lineBreakTitle, image, height } = topic;
  return (
    <S.Link $height={height} to={to}>
      <S.LinkBox>
        <S.TitleBox>
          <S.SubTitle $bgColor={bgColor}>{subTitle}</S.SubTitle>
          <S.Title>
            {title}
            <br />
            {lineBreakTitle}
          </S.Title>
        </S.TitleBox>
        <S.Image src={image} alt="" />
      </S.LinkBox>
    </S.Link>
  );
};

export default MainLink;
