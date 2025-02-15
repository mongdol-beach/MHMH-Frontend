import { motion } from "framer-motion";
import * as S from "./styled";
import { Topic } from "../../types/topic";
import IconArrow from "@assets/icons/left-arrow.svg";
import CardDeck from "../CardDeck";
import useTopicCardNavigation from "../../hooks/useTopicCardNavigation";

interface TopicCardsProps {
  topics: Topic[];
  onHasViewedAllCards?: (hasViewedAllCards: boolean) => void;
  situationColor: {
    mainCardColor: string;
    backCardColor: string;
    backgroundColor: string;
    boldColor: string;
  };
  situationName: string;
}

function TopicCards({
  topics,
  onHasViewedAllCards,
  situationColor,
  situationName,
}: TopicCardsProps) {
  const { currentIndex, isLastSlide, visibleTopics, handleSwipe } =
    useTopicCardNavigation({
      topics,
      onHasViewedAllCards,
    });

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
            $situationColor={situationColor}
            situationName={situationName}
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
