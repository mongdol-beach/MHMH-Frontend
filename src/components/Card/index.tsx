import { useState } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import * as S from "./styled";
import { CardStyleProps } from "./CardFront/styled";

export interface CardProps extends CardStyleProps {
  situationName: string;
  id: number;
  content: string;
}

function Card({ situationName, id, content, $color }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <S.CardContainer role="button" onClick={handleClick}>
      <S.CardInner $isFlipped={isFlipped}>
        <CardFront
          id={id}
          content={content}
          situationName={situationName}
          $color={$color}
        />
        <CardBack id={id} content={content} situationName={situationName} />
      </S.CardInner>
    </S.CardContainer>
  );
}

export default Card;
