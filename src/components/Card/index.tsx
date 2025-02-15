import { useRef, useState } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import * as S from "./styled";
import { CardStyleProps } from "./CardFront/styled";

export interface CardProps extends CardStyleProps {
  situationName: string;
  id: number;
  content: string;
}

export function ensureHexColor(color: string): string {
  return color.startsWith("#") ? color : `#${color}`;
}

function Card({ situationName, id, content, $situationColor }: CardProps) {
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
            mainCardColor: ensureHexColor($situationColor.mainCardColor),
            backCardColor: ensureHexColor($situationColor.backCardColor),
            boldColor: ensureHexColor($situationColor.boldColor),
            backgroundColor: ensureHexColor($situationColor.backgroundColor),
          }}
        />
        <CardBack
          id={id}
          content={content}
          situationName={situationName}
          $situationColor={{
            mainCardColor: ensureHexColor($situationColor.mainCardColor),
            backCardColor: ensureHexColor($situationColor.backCardColor),
            boldColor: ensureHexColor($situationColor.boldColor),
            backgroundColor: ensureHexColor($situationColor.backgroundColor),
          }}
        />
      </S.CardInner>
    </S.CardContainer>
  );
}

export default Card;
