import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as S from "./styled";
import { Topic } from "../../types/topic";
import Card from "../Card";
import { COLORS } from "../../styles/color";
import IconArrow from "@assets/icons/left-arrow.svg";

const SWIPE_THRESHOLD = 100;
const SCALE_FACTOR = 0.05;
const VERTICAL_OFFSET = 20;

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

  // 현재 보여줄 카드들 (최대 3개)
  const visibleTopics = topics.slice(currentIndex, currentIndex + 3);

  const handleSwipeLeft = () => {
    if (currentIndex < topics.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsLastSlide(true);
    }
  };

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
            <AnimatePresence mode="popLayout">
              {visibleTopics.map((topic, index) => (
                <S.CardMotionWrapper
                  key={topic.id}
                  style={{
                    zIndex: topics.length - index,
                  }}
                  // 애니메이션 초기 상태
                  initial={{ scale: 1, y: 40, opacity: 0 }}
                  // 애니메이션 상태
                  animate={{
                    scale: 1 - index * SCALE_FACTOR, // 뒤에 쌓인 카드는 작아짐
                    y: -index * VERTICAL_OFFSET, // 뒤에 쌓인 카드는 위로 올라감
                    opacity: 1, // 카드가 보이도록
                  }}
                  // 퇴장 애니메이션
                  exit={{
                    x: -300, // 왼쪽으로 300px 이동
                    opacity: 0, // 투명해지면서 사라짐
                    transition: { duration: 0.2 }, // 애니메이션 지속 시간
                  }}
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
                  dragElastic={0.7} // 드래그 반발력(1에 가까울수록 더 탄력적)
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
                <S.IconButton>
                  <S.Icon src={IconArrow} alt="이전 토픽으로 돌아가기" />
                </S.IconButton>
              )}
            </S.LeftButtonWrapper>
            <S.ProgressText>
              {currentIndex + 1}/{topics.length}
            </S.ProgressText>
            <S.RightButtonWrapper>
              <S.IconButton>
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
