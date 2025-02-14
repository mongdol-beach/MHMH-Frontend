import * as S from "../TopicCards/styled";
import IconArrow from "@assets/icons/left-arrow.svg";
import CardDeck from "../CardDeck";
import useTopicCardNavigation from "../../hooks/useTopicCardNavigation";
import useRandomTopics from "../../hooks/useRandomTopics";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PAGE_PATH from "../../constants/path";
import { ensureHexColor } from "../Card";

export interface RandomTopicCardsProps {
  onHasViewedAllCards?: (hasViewedAllCards: boolean) => void;
  situationName: string;
  situationColor: {
    boldColor: string;
    mainCardColor: string;
    backCardColor: string;
    backgroundColor: string;
  };
}

export default function RandomTopicCards({
  onHasViewedAllCards,
}: RandomTopicCardsProps) {
  const navigate = useNavigate();
  const { data, fetchNextPage, isFetching } = useRandomTopics();
  const topics = data?.pages.flatMap((page) => page.topics) || [];
  const { currentIndex, visibleTopics, handleSwipe } = useTopicCardNavigation({
    topics,
    onHasViewedAllCards,
  });

  const handleExit = () => {
    navigate(PAGE_PATH.MAIN);
  };

  // 현재 인덱스가 전체 토픽 개수의 60%에 도달하면 다음 페이지 로드
  useEffect(() => {
    if (currentIndex >= topics.length * 0.6 && !isFetching) {
      fetchNextPage();
    }
  }, [currentIndex, topics.length, fetchNextPage, isFetching]);

  if (!topics.length) return null;

  return (
    <S.DeckContainer>
      <CardDeck
        visibleTopics={visibleTopics}
        currentIndex={currentIndex}
        onSwipe={handleSwipe}
        $situationColor={{
          mainCardColor: ensureHexColor(
            topics[currentIndex].situationColor.mainCardColor,
          ),
          backCardColor: ensureHexColor(
            topics[currentIndex].situationColor.backCardColor,
          ),
          boldColor: ensureHexColor(
            topics[currentIndex].situationColor.boldColor,
          ),
          backgroundColor: "#ffff",
        }}
        situationName={topics[currentIndex].situationName}
      />
      <S.TopicNavigationControls>
        <S.LeftButtonWrapper>
          {currentIndex > 0 && (
            <S.IconButton onClick={() => handleSwipe("right")}>
              <S.Icon src={IconArrow} alt="이전 토픽으로 돌아가기" />
            </S.IconButton>
          )}
        </S.LeftButtonWrapper>
        <S.ExitButton onClick={handleExit}>종료하기</S.ExitButton>
        <S.RightButtonWrapper>
          <S.IconButton onClick={() => handleSwipe("left")}>
            <S.IconOpposite src={IconArrow} alt="다음 토픽으로 이동하기" />
          </S.IconButton>
        </S.RightButtonWrapper>
      </S.TopicNavigationControls>
    </S.DeckContainer>
  );
}
