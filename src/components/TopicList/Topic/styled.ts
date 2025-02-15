import styled from "styled-components";
import { CardStyleProps } from "../../Card/CardFront/styled";
import { ensureHexColor } from "../../Card";

export const Topic = styled.li``;

export const TopicButton = styled.button<CardStyleProps>`
  display: flex;
  width: 6.5625rem;
  height: 8.4375rem;
  padding: 0 0.5rem 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  background-color: ${(props) =>
    ensureHexColor(props.$situationColor?.mainCardColor)};

  &:hover {
    transition: 0.75s;
    transform: scale(1.05);
  }
`;

export const NumberBox = styled.div`
  position: relative;
`;

export const SemiCircleIcon = styled.img<CardStyleProps>`
  border-bottom-left-radius: 3.125rem;
  border-bottom-right-radius: 3.125rem;
  background-color: ${(props) =>
    ensureHexColor(props.$situationColor?.boldColor)};
`;

export const NumberText = styled.span<CardStyleProps>`
  position: absolute;
  top: 0;
  left: 48.5%;
  transform: translateX(-50%);
  color: ${(props) => ensureHexColor(props.$situationColor?.mainCardColor)};
  text-align: center;
  font-family: "esamanru OTF";
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.025rem;
`;

export const Content = styled.p`
  color: ${(props) => props.theme.colors["--point-beige"]};
  text-align: center;
  font-family: "esamanru OTF";
  font-size: 0.875rem;
  font-weight: 100;
  line-height: 150%;
  letter-spacing: -0.0175rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: keep-all;
`;

export const TopicText = styled.p`
  color: ${(props) => props.theme.colors["--point-beige"]};
  text-align: center;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.045rem;
  opacity: 0.5;
`;
