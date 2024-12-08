import { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import * as S from "./styled";
import Header from "../Header";
import { topics } from "./data";
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
};

const TopicsBySituation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLastSlide, setIsLastSlide] = useState(false);
  // 마지막 슬라이드를 위해 빈 문자열을 추가
  const slides = [...topics, ""];

  const topicsToShow = topics.slice(
    currentIndex,
    Math.min(currentIndex + TOPICS_LENGTH_TO_SHOW, topics.length),
  );

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentIndex(Math.min(swiper.activeIndex, topics.length - 1));
    setIsLastSlide(swiper.isEnd);
  };

  return (
    <>
      <Header title="소개팅 토픽" />
      <S.Main>
        <S.SituationBox>
          <S.Situation>#소개팅</S.Situation>
          <S.ViewAllTopicsButton>전체 토픽 둘러보기 &gt;</S.ViewAllTopicsButton>
        </S.SituationBox>

        <S.CardStackContainer>
          {isLastSlide ? (
            <div>모든 토픽을 확인하셨습니다!</div>
          ) : (
            <Swiper
              {...SWIPER_CONFIG}
              onSlideChange={handleSlideChange}
              slidesPerView={1}
            >
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
        </S.CardStackContainer>

        {!isLastSlide ? (
          <S.ProgressContainer>
            <S.ProgressText>
              {currentIndex + 1}/{topics.length}
            </S.ProgressText>
          </S.ProgressContainer>
        ) : null}
      </S.Main>
    </>
  );
};

export default TopicsBySituation;
