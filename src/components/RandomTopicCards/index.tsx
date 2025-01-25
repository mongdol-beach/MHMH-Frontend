import * as S from "../TopicCards/styled";
import IconArrow from "@assets/icons/left-arrow.svg";
import CardDeck from "../CardDeck";
import useTopicCardNavigation from "../../hooks/useTopicCardNavigation";
import { useRandomTopics } from "../../hooks/useRandomTopics";
import { useEffect } from "react";

interface RandomTopicCardsProps {
  onHasViewedAllCards?: (hasViewedAllCards: boolean) => void;
}

export default function RandomTopicCards({
  onHasViewedAllCards,
}: RandomTopicCardsProps) {
  const { data, fetchNextPage } = useRandomTopics();
  const topics = data?.pages.flatMap((page) => page.topics) || [];
  const { currentIndex, visibleTopics, handleSwipe } = useTopicCardNavigation({
    topics,
    onHasViewedAllCards,
  });

  // 현재 인덱스가 전체 토픽 개수의 80%에 도달하면 다음 페이지 로드
  useEffect(() => {
    if (currentIndex >= topics.length * 0.6) {
      fetchNextPage();
    }
  }, [currentIndex, topics.length, fetchNextPage]);

  if (!topics.length) return null;

  return (
    <S.DeckContainer>
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
    </S.DeckContainer>
  );
}
