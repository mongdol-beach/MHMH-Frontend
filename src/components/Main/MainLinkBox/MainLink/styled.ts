import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { ColorKey } from "..";

export const Link = styled(RouterLink)<{ $height: string }>`
  display: flex;
  width: 100%;
  height: ${(props) => `${props.$height}rem`};
  padding: 0.75rem 0.62rem 0.75rem 0.75rem;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors["-grayscale-50"]};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
`;

export const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: relative;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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

export const Image = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0%;
  width: 5.5rem;
  height: 5.5rem;
`;
