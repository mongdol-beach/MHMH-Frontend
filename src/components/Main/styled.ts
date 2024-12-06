import styled from "styled-components";
import { MOBILE_MEDIA_QUERY } from "../../styles/constants";

export const Container = styled.main`
  ${MOBILE_MEDIA_QUERY} {
    width: 100%;
  }
`;

export const TitleBox = styled.div`
  ${MOBILE_MEDIA_QUERY} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.12rem auto 0.31rem;
    position: relative;
  }
`;

export const SubTitle = styled.p`
  ${MOBILE_MEDIA_QUERY} {
    color: ${(props) => props.theme.colors["-grayscale-800"]};
    text-align: center;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.011rem;
  }
`;

export const Title = styled.span`
  border-radius: 4.5625rem;
  padding: 0.25rem 0.75rem;
  background: ${(props) => props.theme.colors["--card-color-beige"]};
  color: ${(props) => props.theme.colors["-grayscale-800"]};
  text-align: center;
  font-family: "esamanru OTF";
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.011rem;
`;

export const TempLogo = styled.h1`
  color: ${(props) => props.theme.colors["--card-color-blue"]};
  font-size: 5.28419rem;
  font-weight: 700;
  line-height: 76%;
  letter-spacing: -0.79263rem;
`;

export const BackgroundEffect = styled.img``;

export const AbsoluteBox = styled.div`
  margin-top: 4.44rem;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors["-grayscale-50"]};
  text-align: center;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.011rem;
`;

export const TextBold = styled.span`
  color: ${(props) => props.theme.colors["-grayscale-50"]};
  font-weight: 800;
  line-height: 150%;
  letter-spacing: -0.011rem;
`;

export const TopicBox = styled.div`
  display: flex;
  gap: 1.25rem 0.9rem;
  flex-wrap: wrap;
  margin: 1.75rem 1rem 0;
`;
