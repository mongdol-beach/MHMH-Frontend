import styled from "styled-components";
import { ensureHexColor } from "..";
export const CardWrap = styled.div`
  position: absolute;
  backface-visibility: hidden;
  user-select: none;
`;

export interface CardStyleProps {
  $situationColor: {
    mainCardColor: string;
    backCardColor: string;
    backgroundColor: string;
    boldColor: string;
  };
}

export const Card = styled.div<CardStyleProps>`
  width: 20.375rem;
  height: 27rem;
  border-radius: 1rem;
  background-color: ${(props) =>
    ensureHexColor(props.$situationColor?.mainCardColor)};
  position: relative;
  padding: 1.35rem;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.25);
`;

const AbsoluteImage = styled.img`
  position: absolute;
`;

export const LeftTopCircle = styled(AbsoluteImage)<CardStyleProps>`
  background-color: ${({ $situationColor }) =>
    ensureHexColor($situationColor.boldColor)};
  border-radius: 50%;
  top: 2.1875rem;
  left: 1.81rem;
`;

export const RightBottomCircle = styled(AbsoluteImage)<CardStyleProps>`
  background-color: ${({ $situationColor }) =>
    ensureHexColor($situationColor.boldColor)};
  border-radius: 50%;
  bottom: 1.6rem;
  right: 1.51rem;
`;

export const Flip = styled(AbsoluteImage)`
  top: 0.9rem;
  right: 0.2rem;
`;

export const Smile = styled(AbsoluteImage)<CardStyleProps>`
  fill: ${({ $situationColor }) => $situationColor?.boldColor};
  bottom: 0.75rem;
  left: 0.3rem;
`;

export const ContentBox = styled.div`
  position: absolute;
  width: 16.25425rem;
  height: 16.25425rem;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StartQuotes = styled(AbsoluteImage)`
  position: absolute;
  top: 0.3rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const EndQuotes = styled(AbsoluteImage)`
  position: absolute;
  bottom: 0.3rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const NumberBox = styled.div`
  position: absolute;
  top: 1.4rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const SemiCircleIcon = styled.img<CardStyleProps>`
  border-bottom-left-radius: 3.125rem;
  border-bottom-right-radius: 3.125rem;
  background-color: ${({ $situationColor }) => $situationColor?.boldColor};
`;

export const NumberText = styled.span<CardStyleProps>`
  position: absolute;
  color: ${(props) => ensureHexColor(props.$situationColor?.mainCardColor)};
  font-family: "esamanru OTF";
  font-size: 1.75rem;
  letter-spacing: -0.035rem;
  left: 50%;
  transform: translateX(-50%);
  line-height: 150%; /* 2.625rem */
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors["--point-beige"]};
  text-align: center;
  font-family: "esamanru OTF";
  font-size: 1.5rem;
  font-weight: 500;
  width: 80%;
  line-height: 150%;
  letter-spacing: -0.02325rem;
  word-break: keep-all;
  margin: 0;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors["--point-beige"]};
  text-align: center;
  font-family: "Pretendard";
  font-size: 1rem;
  font-weight: 500;
  line-height: 150%;
  font-style: normal;
  letter-spacing: -0.01325rem;
  opacity: 0.5;
  display: flex;
  position: absolute;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
`;
