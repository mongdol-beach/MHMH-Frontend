import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import * as S from "./styled";
import { Topic } from "../../types/topic";
import IconArrow from "@assets/icons/left-arrow.svg";
import CardDeck from "../CardDeck";
interface TopicCardsProps {
  topics: Topic[];
  onHasViewedAllCards?: (hasViewedAllCards: boolean) => void;
}

function TopicCards({ topics, onHasViewedAllCards }: TopicCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLastSlide, setIsLastSlide] = useState(false);

  // 현재 보여줄 카드들 (최대 3개)
  const visibleTopics = topics.slice(currentIndex, currentIndex + 3);

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "left") {
      if (currentIndex < topics.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setIsLastSlide(true);
      }
    } else {
      if (currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
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
          <CardDeck
            visibleTopics={visibleTopics}
            currentIndex={currentIndex}
            onSwipe={handleSwipe}
          />
          <S.TopicNavigationControls>
            <S.LeftButtonWrapper>
              {currentIndex > 0 && (
                <S.IconButton onClick={() => handleSwipe("right")}>
                  <S.Icon src={IconArrow} alt="이전 토픽으로 돌아가기" />
                </S.IconButton>
              )}
            </S.LeftButtonWrapper>
            <S.ProgressText>
              {currentIndex + 1}/{topics.length}
            </S.ProgressText>
            <S.RightButtonWrapper>
              <S.IconButton onClick={() => handleSwipe("left")}>
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
