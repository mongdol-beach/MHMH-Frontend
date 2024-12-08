import { useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import * as S from "./styled";
import Header from "../Header";
import { StackOrder } from "./type";
import Finish from "../SituationFinish";
import { useParams } from "react-router-dom";
import axios from "axios";

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

interface Topic {
  id: number;
  content: string;
  isRecommend: boolean;
  tips: string[];
}

const TopicsBySituation = () => {
  const { situation } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [topics, setTopics] = useState<Topic[]>([]);

  // 마지막 슬라이드를 위해 빈 문자열을 추가
  const slides = [...topics, ""];

  const fetchTopicData = async () => {
    try {
      const apiUrl = "https://mhmh-backend.fly.dev/topic/situation";
      const endpoint = `${apiUrl}/${situation}`;
      const res = await axios.get(endpoint);
      console.log(res.data);
      setTopics(res.data.topics); // topics 데이터를 상태에 저장
    } catch (error) {
      console.error("API 요청 중 오류 발생:", error);
    }
  };
  // 컴포넌트 마운트 시 또는 situation 값이 변경될 때 API 요청 실행
  useEffect(() => {
    if (situation) {
      fetchTopicData();
    }
  }, [situation]);

  const topicsToShow = topics.slice(
    currentIndex,
    Math.min(currentIndex + TOPICS_LENGTH_TO_SHOW, topics.length),
  );

  // currentIndex가 바뀔 때마다 마지막 슬라이드인지 확인하는 useEffect
  useEffect(() => {
    if (currentIndex === topics.length - 1) {
      setIsLastSlide(true);
    } else {
      setIsLastSlide(false);
    }
  }, [currentIndex, topics.length]);

  const handleSlideChange = (swiper: SwiperType) => {
    console.log("swiper.activeIndex:", swiper.activeIndex);
    setCurrentIndex(Math.min(swiper.activeIndex, topics.length - 1));
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
            <Finish topics={topics} />
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
                        {stackTopic.content}
                      </S.StackedCard>
                    ))}
                  </S.CardStack>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </S.CardStackContainer>

        {!isLastSlide && (
          <S.ProgressContainer>
            <S.ProgressText>
              {currentIndex + 1}/{topics.length}
            </S.ProgressText>
          </S.ProgressContainer>
        )}
      </S.Main>
    </>
  );
};

export default TopicsBySituation;
