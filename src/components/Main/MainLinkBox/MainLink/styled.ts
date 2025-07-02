import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { ColorKey } from "..";

export const Link = styled(RouterLink)<{ $height: string }>`
  display: flex;
  width: 100%;
  height: ${(props) => `${props.$height}rem`};
  padding: 0.75rem 0.62rem 0.75rem 0.75rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors["-grayscale-50"]};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
  position: relative;
`;

export const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const TitleBox = styled.div<{ $isBalance: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;

  ${(props) =>
    props.$isBalance
      ? `
   justify-content:center;
  `
      : `

  `}
`;

export const SubTitle = styled.p<{ $bgColor: ColorKey }>`
  color: ${(props) => props.theme.colors["--grayscale-800"]};
  background-color: ${(props) => props.theme.colors[props.$bgColor]};
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.045rem;
  border-radius: 10px;
  text-align: center;
  padding: 0.25rem 0.5rem;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors["--grayscale-800"]};
  font-family: "esamanru OTF";
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.0225rem;
`;

export const TopicImage = styled.img<{ $isBalance: boolean }>`
  position: absolute;
  ${(props) =>
    props.$isBalance
      ? `
    top: 50%;
    transform: translateY(-50%);
    right: 0%;
    width: 3.6rem;
    height: 3.6rem;
  `
      : `
    bottom: 1%;
    right: 5%;
    width: 5rem;
    height: 5rem;
  `}
`;
