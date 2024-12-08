import { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import * as S from "./styled";
import { StackOrder } from "./type";
const TOPICS_LENGTH_TO_SHOW = 3;

const SWIPER_CONFIG = {
  slidesPerView: 1,
  effect: "cards" as const,
  modules: [EffectCards],
  className: "stacked-card-swiper",
  style: { height: "29.86rem" },
  cardsEffect: {
    perSlideOffset: 0,
    perSlideRotate: 0,
    rotate: false,
    slideShadows: false,
  },
  direction: "horizontal" as const,
  loop: false,
  // 이전 슬라이드로 이동하는 것을 비활성화
  allowSlidePrev: false,
};

interface TopicCardsProps {
  topics: string[];
}

const TopicCards = ({ topics }: TopicCardsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const slides = [...topics, ""];
  console.info("slides ", slides);

  const topicsToShow = topics.slice(
    currentIndex,
    Math.min(currentIndex + TOPICS_LENGTH_TO_SHOW, topics.length),
  );

  const handleSlideChange = (swiper: SwiperType) => {
    const newIndex = swiper.activeIndex;
    // 마지막 인덱스 이상으로 이동하지 않도록 설정
    setCurrentIndex(Math.min(newIndex, topics.length - 1));
    // topics의 마지막 인덱스일 때 isLastSlide를 true로 설정
    setIsLastSlide(newIndex >= topics.length);
  };

  return (
    <S.CardStackContainer>
      {isLastSlide ? (
        <div>모든 토픽을 확인하셨습니다!</div>
      ) : (
        <Swiper {...SWIPER_CONFIG} onSlideChange={handleSlideChange}>
          {slides.map((_, index) => (
            <SwiperSlide key={`slide-${index}`}>
              <S.CardStack>
                {topicsToShow.map((stackTopic, stackIndex) => (
                  <S.StackedCard
                    key={`${stackTopic}-${stackIndex}`}
                    order={(stackIndex + 1) as StackOrder}
                  >
                    {stackTopic}
                  </S.StackedCard>
                ))}
              </S.CardStack>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {!isLastSlide && (
        <S.ProgressContainer>
          <S.ProgressText>
            {currentIndex + 1}/{topics.length}
          </S.ProgressText>
        </S.ProgressContainer>
      )}
    </S.CardStackContainer>
  );
};

export default TopicCards;
