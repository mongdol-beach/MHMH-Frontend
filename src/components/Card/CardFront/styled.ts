import styled from "styled-components";

export const CardWrap = styled.div`
  position: absolute;
  backface-visibility: hidden;
  user-select: none;
`;

export const Card = styled.div`
  width: 20.375rem;
  height: 27rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors["--Primary-blue-500"]};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.35rem;
`;

const AbsoluteImage = styled.img`
  position: absolute;
`;

export const Background = styled(AbsoluteImage)`
  left: 1.1rem;
  top: 1.375rem;
`;

export const LeftTopCircle = styled(AbsoluteImage)`
  top: 2.1875rem;
  left: 1.81rem;
`;

export const RightBottomCircle = styled(AbsoluteImage)`
  bottom: 2.1875rem;
  right: 1.81rem;
`;

export const Flip = styled(AbsoluteImage)`
  top: 0.9rem;
  right: 0.2rem;
`;

export const Smile = styled(AbsoluteImage)`
  bottom: 0.75rem;
  left: 0.3rem;
`;

export const StartQuotes = styled(AbsoluteImage)`
  top: 6.38rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const EndQuotes = styled(AbsoluteImage)`
  bottom: 6.25rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const NumberBox = styled.div`
  position: relative;
`;

export const SemiCircleIcon = styled.img``;

export const NumberText = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: ${(props) => props.theme.colors["--Primary-blue-500"]};
  text-align: center;
  font-family: "esamanru OTF";
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.025rem;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors["--point-beige"]};
  text-align: center;
  font-family: "esamanru OTF";
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.035rem;
  width: 11.5rem;
  word-break: keep-all;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors["--point-beige"]};
  text-align: center;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.02rem;
  opacity: 0.5;
  margin-bottom: 0.75rem;
`;
