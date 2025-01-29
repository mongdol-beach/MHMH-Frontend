import { useState, useEffect } from "react";
import { Topic } from "../types/topic";

interface UseTopicCardNavigationProps {
  topics: Topic[];
  onHasViewedAllCards?: (hasViewedAllCards: boolean) => void;
  cardsPerView?: number;
}

interface UseTopicCardNavigationReturn {
  currentIndex: number;
  isLastSlide: boolean;
  visibleTopics: Topic[];
  handleSwipe: (direction: "left" | "right") => void;
}

function useTopicCardNavigation({
  topics,
  onHasViewedAllCards,
  cardsPerView = 3,
}: UseTopicCardNavigationProps): UseTopicCardNavigationReturn {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const visibleTopics = topics.slice(currentIndex, currentIndex + cardsPerView);

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

  return {
    currentIndex,
    isLastSlide,
    visibleTopics,
    handleSwipe,
  };
}

export default useTopicCardNavigation;
