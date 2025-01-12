import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as S from "./styled";
import { Topic } from "../../types/topic";
import Card from "../Card";
import { COLORS } from "../../styles/color";
import IconArrow from "@assets/icons/left-arrow.svg";

const SWIPE_THRESHOLD = 100;
const SCALE_FACTOR = 0.05;
const VERTICAL_OFFSET = 20;
const DURATION = 0.83;

const getColor = (index: number) => {
  const colors = [
    COLORS["--Primary-blue-500"],
    COLORS["--Primary-blue-300"],
    COLORS["--Primary-blue-100"],
  ];
  return colors[index % colors.length];
};

interface TopicCardsProps {
  topics: Topic[];
  onHasViewedAllCards?: (hasViewedAllCards: boolean) => void;
}

function TopicCards({ topics, onHasViewedAllCards }: TopicCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const isAfterFirstRender = useRef(false);

  // 현재 보여줄 카드들 (최대 3개)
  const visibleTopics = topics.slice(currentIndex, currentIndex + 3);

  const handleSwipeLeft = () => {
    if (currentIndex < topics.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsLastSlide(true);
    }
  };

  const handleSwipeRight = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    // 첫 렌더링 이후에 ref 값을 변경
    isAfterFirstRender.current = true;
  }, []);

  useEffect(() => {
    onHasViewedAllCards?.(isLastSlide);
  }, [isLastSlide, onHasViewedAllCards]);

  if (!topics.length) return null;

  return (
    <S.DeckContainer>
      {isLastSlide ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          모든 토픽을 확인하셨습니다!
        </motion.div>
      ) : (
        <>
          <S.DeckWrapper>
            {/* exit animation을 적용하기 위해 AnimatePresence 사용 */}
            <AnimatePresence mode="popLayout">
              {visibleTopics.map((topic, index) => (
                <S.CardMotionWrapper
                  key={topic.id}
                  style={{
                    zIndex: topics.length - index,
                  }}
                  // 첫 렌더링 시에는 animation 적용 안함
                  // 첫번째 카드에 한해서 이후 initial을 적용하는데 뒤로가기 버튼을 클릭했을 때
                  // 화면 밖으로 사라졌던(exit animation) 효과를 반대로 적용하기 위함
                  initial={
                    index === 0 && isAfterFirstRender.current
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
                          x: -300,
                          y: 0,
                          transition: {
                            duration: DURATION,
                          },
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
                      handleSwipeLeft();
                    }
                  }}
                  drag="x" // x축 방향으로만 드래그
                  dragConstraints={{ left: 0, right: 0 }} // 드래그 제한 범위
                  dragElastic={0} // 드래그 반발력(1에 가까울수록 더 탄력적), 드래그는 하지만 요소는 움직이지 않도록 하기 위해 0으로 설정
                >
                  <Card
                    content={topic.content}
                    situationName={topic.situationName}
                    id={topic.id}
                    $color={getColor(index)}
                  />
                </S.CardMotionWrapper>
              ))}
            </AnimatePresence>
          </S.DeckWrapper>
          <S.TopicNavigationControls>
            <S.LeftButtonWrapper>
              {currentIndex > 0 && (
                <S.IconButton onClick={handleSwipeRight}>
                  <S.Icon src={IconArrow} alt="이전 토픽으로 돌아가기" />
                </S.IconButton>
              )}
            </S.LeftButtonWrapper>
            <S.ProgressText>
              {currentIndex + 1}/{topics.length}
            </S.ProgressText>
            <S.RightButtonWrapper>
              <S.IconButton onClick={handleSwipeLeft}>
                <S.IconOpposite src={IconArrow} alt="다음 토픽으로 이동하기" />
              </S.IconButton>
            </S.RightButtonWrapper>
          </S.TopicNavigationControls>
        </>
      )}
    </S.DeckContainer>
  );
}

export default TopicCards;
