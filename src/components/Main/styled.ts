import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100dvh;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  margin: 0 auto 0.31rem;
`;

export const SubTitle = styled.p`
  text-align: center;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.011rem;
  margin-bottom: 0.31rem;
`;

export const Title = styled.span`
  border-radius: 4.5625rem;
  padding: 0.25rem 0.75rem;
  background: ${(props) => props.theme.colors["-grayscale-800"]};
  text-align: center;
  font-family: "esamanru OTF";
  line-height: 150%;
  letter-spacing: -0.011rem;
  color: ${(props) => props.theme.colors["--card-color-beige"]};
`;

export const LogoBox = styled.div`
  position: relative;
  margin: 0.75rem 0rem 5.5rem;
`;

export const LogoIcon = styled.img``;

export const LogoTitle = styled.p`
  position: absolute;
  color: ${(props) => props.theme.colors["--grayscale-900"]};
  font-family: RixYeoljeongdo;
  font-size: 3.375rem;
  line-height: 90%;
  letter-spacing: -0.07425rem;
  white-space: nowrap;
  left: 50%;
  top: 75%;
  transform: translateX(-50%);
`;

export const BackgroundEffect = styled.img`
  left: 50%;
  top: -50px;
  transform: translateX(-50%);
  position: absolute;
  z-index: -1;
`;

export const ContentBox = styled.div`
  position: relative;
  z-index: 1;
  border-radius: 40% 40% 0 0;
  background: ${(props) => props.theme.colors["--Primary-blue-500"]};
  padding: 0 1rem;

  @media screen and (min-width: 1024px) {
    height: calc(100dvh - 282px);
  }
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

export const HorizonLine = styled.hr`
  margin: 0.88rem 0;
  border: 1px solid ${(props) => props.theme.colors["--card-color-blue-100"]};
  border-width: 0.5px 0 0 0;
`;

export const UserFeedbackButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 2.75rem;
  padding: 0.5rem 0.88rem;
  background: ${(props) => props.theme.colors["--Primary-blue-300"]};
  border-radius: 8px;
  margin-bottom: 4.38rem;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors["-grayscale-50"]};
  line-height: 130%;
  letter-spacing: -0.0175rem;
`;

export const ArrowIcon = styled.img``;

export const CopyRight = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors["--card-color-blue-100"]};
  font-size: 0.75rem;
  padding-bottom: 1.25rem;

  @media screen and (min-width: 1024px) {
    position: absolute;
    bottom: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    padding: 0;
  }
`;
