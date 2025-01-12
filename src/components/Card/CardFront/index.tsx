import * as S from "./styled";
import CardBackgroundEffect from "@assets/icons/card-background-effect.svg";
import BlueCircle from "@assets/icons/blue-circle.svg";
import FlipIcon from "@assets/icons/flip.svg";
import SmileIcon from "@assets/icons/smile.svg";
import SemiCircleIcon from "@assets/icons/semi-circle.svg";
import StartQuotes from "@assets/icons/quotes-start.svg";
import EndQuotes from "@assets/icons/quotes-end.svg";
import { CardProps } from "..";

function CardFront({ situationName, id, content, $color }: CardProps) {
  return (
    <S.CardWrap>
      <S.Card $color={$color}>
        <S.NumberBox>
          <S.SemiCircleIcon src={SemiCircleIcon} />
          <S.NumberText>{id}</S.NumberText>
        </S.NumberBox>
        <S.Title>{content}</S.Title>
        <S.Text>{situationName}</S.Text>
        <S.Background src={CardBackgroundEffect} draggable={false} />
        <S.LeftTopCircle src={BlueCircle} />
        <S.RightBottomCircle src={BlueCircle} />
        <S.Flip src={FlipIcon} alt="카드 뒤집기" />
        <S.Smile src={SmileIcon} />
        <S.StartQuotes src={StartQuotes} />
        <S.EndQuotes src={EndQuotes} />
      </S.Card>
    </S.CardWrap>
  );
}

export default CardFront;
