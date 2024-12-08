import { useState } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import * as S from "./styled";

export interface CardProps {
  situationName: string;
  id: number;
  content: string;
}

function Card({ situationName, id, content }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <S.CardContainer role="button" onClick={handleClick}>
      <S.CardInner $isFlipped={isFlipped}>
        <CardFront id={id} content={content} situationName={situationName} />
        <CardBack id={id} content={content} situationName={situationName} />
      </S.CardInner>
    </S.CardContainer>
  );
}

export default Card;
