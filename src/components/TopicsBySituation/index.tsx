import { useEffect, useState } from "react";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import * as S from "./styled";
import Header from "../Header";
import { topics } from "./data";

const TOPICS_LENGTH_TO_SHOW = 3;

const TopicBySituation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const topicsToShow = topics.slice(
    currentIndex,
    Math.min(currentIndex + TOPICS_LENGTH_TO_SHOW, topics.length),
  );

  const handleSlideChange = (swiper: SwiperType) => {
    const newIndex = Math.min(swiper.activeIndex, topics.length - 1);
    setCurrentIndex(newIndex);
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
          <Swiper
            slidesPerView={1}
            effect="cards"
            modules={[EffectCards]}
            onSlideChange={handleSlideChange}
            className="stacked-card-swiper"
            style={{ height: "29.86rem" }}
            cardsEffect={{
              perSlideOffset: 0,
              perSlideRotate: 0,
              rotate: false,
              slideShadows: false,
            }}
            direction="horizontal"
            loop={false}
          >
            {topics.map((_, index) => (
              <SwiperSlide key={`slide-${index}`}>
                <S.CardStack>
                  {topicsToShow.map((topic, stackIndex) => (
                    <S.StackedCard
                      key={`${topic}-${stackIndex}`}
                      order={(stackIndex + 1) as 1 | 2 | 3}
                    >
                      {topic}
                    </S.StackedCard>
                  ))}
                </S.CardStack>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.CardStackContainer>
      </S.Main>
    </>
  );
};

export default TopicBySituation;
