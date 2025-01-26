import { useRef, useState } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import * as S from "./styled";
import { CardStyleProps } from "./CardFront/styled";
// import { SituationColor } from "../../types/topic";

export interface CardProps extends CardStyleProps {
  situationName: string;
  id: number;
  content: string;
  // situationColor: SituationColor;
  $situationColor: {
    mainCardColor: string;
    backCardColor: string;
    backgroundColor: string;
    boldColor: string;
  };
}

function Card({ situationName, id, content, $situationColor }: CardProps) {
  console.log("Card_index", $situationColor);
  // function Card({ situationName, id, content, $color }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const startX = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    startX.current = e.clientX;
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const diffX = Math.abs(e.clientX - startX.current);
    if (diffX > 10) {
      // 10px 이상 움직였으면 클릭 이벤트 발생 X
      return;
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <S.CardContainer
      role="button"
      onClick={handleClick}
      onMouseDown={handleMouseDown}
    >
      <S.CardInner $isFlipped={isFlipped}>
        <CardFront
          id={id}
          content={content}
          situationName={situationName}
          $situationColor={{
            mainCardColor: $situationColor.mainCardColor,
            backCardColor: $situationColor.backCardColor,
            boldColor: $situationColor.boldColor,
            backgroundColor: $situationColor.backgroundColor,
          }}
          // situationColor={situationColor}
        />
        <CardBack
          id={id}
          content={content}
          situationName={situationName}
          $situationColor={$situationColor}
        />
      </S.CardInner>
    </S.CardContainer>
  );
}

export default Card;
