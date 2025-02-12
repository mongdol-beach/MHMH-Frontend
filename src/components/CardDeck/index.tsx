import { AnimatePresence } from "framer-motion";
import { Topic } from "../../types/topic";
import Card, { ensureHexColor } from "../Card";
import * as S from "../TopicCards/styled";
import { useEffect, useRef } from "react";

const SCALE_FACTOR = 0.05;
const VERTICAL_OFFSET = 20;
const DURATION = 0.83;

interface CardDeckProps {
  visibleTopics: Topic[];
  currentIndex: number;
  onSwipe: (direction: "left" | "right") => void;
  $situationColor: {
    mainCardColor: string;
    backCardColor: string;
    backgroundColor: string;
    boldColor: string;
  };
  situationName: string;
}

const SWIPE_THRESHOLD = -100;
const getColor = (
  index: number,
  $situationColor: {
    mainCardColor: string;
    backCardColor: string;
    backgroundColor: string;
  },
) => {
  const colors = [
    ensureHexColor($situationColor.mainCardColor),
    ensureHexColor($situationColor.backCardColor),
    ensureHexColor($situationColor.backgroundColor),
  ];
  return colors[index % colors.length];
};

function CardDeck({
  visibleTopics,
  onSwipe,
  $situationColor,
  situationName,
}: CardDeckProps) {
  const isAfterFirstRender = useRef(false);

  useEffect(() => {
    // 첫 렌더링 이후에 ref 값을 변경
    isAfterFirstRender.current = true;
  }, []);

  return (
    <S.DeckWrapper>
      {/* exit animation을 적용하기 위해 AnimatePresence 사용 */}
      <AnimatePresence mode="popLayout">
        {visibleTopics.map((topic, index) => {
          const cardColors = {
            mainCardColor: getColor(index, $situationColor),
            backCardColor: getColor(index + 1, $situationColor),
            backgroundColor: getColor(index + 2, $situationColor),
            boldColor: ensureHexColor($situationColor.boldColor),
          };
          return (
            <S.CardMotionWrapper
              key={topic.id}
              style={{
                zIndex: visibleTopics.length - index,
              }}
              // 첫 렌더링 시에는 animation 적용 안함
              // 첫번째 카드에 한해서 이후 initial을 적용하는데 뒤로가기 버튼을 클릭했을 때
              // 화면 밖으로 사라졌던(exit animation) 효과를 반대로 적용하기 위함
              initial={
                index === 0 && isAfterFirstRender
                  ? {
                      x: -300,
                      y: -index * VERTICAL_OFFSET,
                    }
                  : false
              }
              animate={{
                scaleX: 1 - index * SCALE_FACTOR, // 뒤에 쌓인 카드는 작아짐
                x: 0,
                y: -index * VERTICAL_OFFSET, // 뒤에 쌓인 카드는 위로 올라감
                opacity: 1, // 카드가 보이도록
              }}
              // 퇴장 애니메이션(요소가 DOM에서 사라질 때 적용)
              // 첫번째 카드에만 적용. 다른 카드에도 적용해버리면 뒤로가기 버튼을 눌렀을 때 세번째 카드가 DOM에서 벗어나면서 퇴장 애니메이션이 적용됨
              exit={
                index === 0
                  ? {
                      x: -500,
                      y: 0,
                      transition: {
                        duration: DURATION,
                      },
                      zIndex: 10,
                    }
                  : undefined
              }
              transition={{
                type: "spring", // 스프링 물리 기반 애니메이션
                stiffness: 200, // 스프링의 강성(높을수록 더 빠르고 탄력적)
                damping: 20, // 스프링의 감쇠(낮을수록 더 많이 튀어오름)
              }}
              onDragEnd={(_, info) => {
                if (info.offset.x < SWIPE_THRESHOLD) {
                  onSwipe("left");
                } else if (info.offset.x > Math.abs(SWIPE_THRESHOLD)) {
                  onSwipe("right");
                }
              }}
              drag="x" // x축 방향으로만 드래그
              dragConstraints={{ left: 0, right: 0 }} // 드래그 제한 범위
              dragElastic={0.7} // 드래그 반발력(1에 가까울수록 더 탄력적)
            >
              <Card
                content={topic.content}
                situationName={situationName}
                id={topic.id}
                $situationColor={cardColors}
              />
            </S.CardMotionWrapper>
          );
        })}
      </AnimatePresence>
    </S.DeckWrapper>
  );
}
export default CardDeck;
