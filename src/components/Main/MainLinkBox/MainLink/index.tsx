import { LinkProps } from "react-router-dom";
import * as S from "./styled";

interface MainLinkProps extends LinkProps {
  title: string;
  text: string;
  lineBreakTitle?: string;
  width: string;
  height: string;
}

const MainLink = ({
  to,
  title,
  lineBreakTitle,
  text,
  width,
  height,
}: MainLinkProps) => {
  return (
    <S.Link $width={width} $height={height} to={to}>
      <S.Title>
        {title}
        <br />
        {lineBreakTitle}
      </S.Title>
      <S.Text>{text}</S.Text>
    </S.Link>
  );
};

export default MainLink;
