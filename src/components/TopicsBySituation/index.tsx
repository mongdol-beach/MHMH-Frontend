import { useState } from "react";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import * as S from "./styled";
import Header from "../Header";
import { topics } from "./data";

const TopicBySituation = () => {
  const topicsLengthToShow = 3;
  const [currentIndex, setCurrentIndex] = useState(0);

  const topicsToShow = topics.slice(
    currentIndex,
    currentIndex + topicsLengthToShow,
  );

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.activeIndex);
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
          >
            <S.CardStack>
              {topicsToShow.map((topic, index) => (
                <SwiperSlide key={`${topic}-${index}`}>
                  <S.StackedCard order={(index + 1) as 1 | 2 | 3}>
                    {topic}
                  </S.StackedCard>
                </SwiperSlide>
              ))}
            </S.CardStack>
          </Swiper>
        </S.CardStackContainer>
      </S.Main>
    </>
  );
};

export default TopicBySituation;
