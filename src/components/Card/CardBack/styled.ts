import styled from "styled-components";
import { CardStyleProps } from "../CardFront/styled";
import { ensureHexColor } from "..";

export const CardWrap = styled.div`
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  user-select: none;
`;

export const Card = styled.div<CardStyleProps>`
  width: 20.375rem;
  height: 27rem;
  border-radius: 1rem;
  flex-shrink: 0;
  border: 4px solid
    ${(props) => ensureHexColor(props.$situationColor?.mainCardColor)};
  background: #fff;
  position: relative;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.25);
`;

export const Box = styled.div`
  padding: 1rem;
  text-align: left;
  width: 100%;
  height: 100%;
  position: relative;
  top: -27rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const SubTitle = styled.p<CardStyleProps>`
  color: ${(props) => ensureHexColor(props.$situationColor?.mainCardColor)};
  font-family: "esamanru OTF";
  font-size: 0.75rem;
  line-height: 150%; /* 1.3125rem */
  display: flex;
  align-items: flex-end;
  gap: 0.2rem;
  position: absolute;
  top: 2rem;
  left: 30%;
  transform: translateX(-50%);
`;

export const CardIndex = styled.span<CardStyleProps>`
  color: ${(props) => ensureHexColor(props.$situationColor?.mainCardColor)};
  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.0225rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const Title = styled.p`
  margin-top: 0.25rem;
  color: ${(props) => props.theme.colors["-grayscale-800"]};
  font-family: "esamanru OTF";
  min-height: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.0225rem;
  word-break: keep-all;
  width: 12rem;
  position: absolute;
  top: 4rem;
  left: 40%;
  transform: translateX(-50%);
`;

export const TipBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  margin: 0.75rem 0;
`;

export const TipText = styled.p`
  position: absolute;
  left: 50%;
  bottom: -300%;
  transform: translateX(-50%);
  padding: 0 1.5rem;
  background-color: #fff;
`;

export const Line = styled.hr<CardStyleProps>`
  width: 95%;
  display: block;
  height: 3px;
  border: 0;
  background-color: ${(props) =>
    ensureHexColor(props.$situationColor?.backCardColor)};
`;

export const TipList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  position: absolute;
  bottom: 1rem;
  left: 8%;
`;

export const Tip = styled.li``;

export const TipItem = styled.p`
  color: ${(props) => props.theme.colors["-grayscale-800"]};
  font-size: 0.75rem;
  font-weight: 800;
  line-height: 130%;
  letter-spacing: -0.035rem;
  margin-bottom: 0.12rem;
`;

export const TipSubList = styled.ul``;

export const TipSubItem = styled.li`
  color: ${(props) => props.theme.colors["-grayscale-800"]};
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.035rem;
  list-style: disc;
  margin-left: 0.75rem;
  word-break: keep-all;
`;

export const CardBackIcon = styled.div`
  position: absolute;
  right: 0.88rem;
  top: 0.88rem;
`;
