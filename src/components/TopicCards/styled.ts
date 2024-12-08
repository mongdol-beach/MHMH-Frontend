import styled from "styled-components";
import FONT from "../../styles/font";

export const CardStackContainer = styled.div`
  padding: 0 1.5rem;
  margin-top: 1.19rem;

  .swiper-wrapper {
    box-sizing: inherit !important;
  }

  .stacked-card-swiper {
    .swiper-slide {
      transition: all 0.3s ease;
      opacity: 0;

      &.swiper-slide-active,
      &.swiper-slide-next,
      &.swiper-slide-next + .swiper-slide {
        opacity: 1;
      }
    }
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const ProgressText = styled.span`
  ${FONT.body16}
  opacity: 0.5;
`;
