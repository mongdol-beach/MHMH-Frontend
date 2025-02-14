import * as S from "./styled";
import BlueCircle from "@assets/icons/blue-circle.svg";
import FlipIcon from "@assets/icons/flip.svg";
import SmileIcon from "@assets/icons/smile.svg";
import SemiCircleIcon from "@assets/icons/semi-circle.svg";
import StartQuotes from "@assets/icons/quotes-start.svg";
import EndQuotes from "@assets/icons/quotes-end.svg";
import CardBackgroundEffect from "../../../assets/icons/CardBackgroundEffect";
import { CardProps } from "..";

function CardFront({ situationName, id, content, $situationColor }: CardProps) {
  return (
    <S.CardWrap>
      <S.Card $situationColor={$situationColor}>
        <CardBackgroundEffect $color={$situationColor} />
        <S.NumberBox>
          <S.SemiCircleIcon
            src={SemiCircleIcon}
            $situationColor={$situationColor}
          />
          <S.NumberText $situationColor={$situationColor}>{id}</S.NumberText>
        </S.NumberBox>
        <S.ContentBox>
          <S.StartQuotes src={StartQuotes} />
          <S.Title>{content}</S.Title>
          <S.EndQuotes src={EndQuotes} />
        </S.ContentBox>
        <S.Text>#{situationName}_토픽</S.Text>
        <S.LeftTopCircle $situationColor={$situationColor} src={BlueCircle} />
        <S.RightBottomCircle
          $situationColor={$situationColor}
          src={BlueCircle}
        />
        <S.Flip src={FlipIcon} alt="카드 뒤집기" />
        <S.Smile src={SmileIcon} $situationColor={$situationColor} />
      </S.Card>
    </S.CardWrap>
  );
}

export default CardFront;
