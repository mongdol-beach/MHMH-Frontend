import { AnchorHTMLAttributes } from "react";
import * as S from "./styled";

interface MainLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  text: string;
  lineBreakTitle?: string;
  width: string;
  height: string;
}

const MainLink = ({
  title,
  lineBreakTitle,
  text,
  width,
  height,
  ...rest
}: MainLinkProps) => {
  return (
    <S.Topic $width={width} $height={height} {...rest}>
      <S.Title>
        {title}
        <br />
        {lineBreakTitle}
      </S.Title>
      <S.Text>{text}</S.Text>
    </S.Topic>
  );
};

export default MainLink;
