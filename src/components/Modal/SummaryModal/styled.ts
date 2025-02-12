/* SummaryModal */

import styled from "styled-components";
import FONT from "../../../styles/font";
import { ensureHexColor } from "../../Card";
import { CardStyleProps } from "../../Card/CardFront/styled";

export const CloseIcon = styled.img<{ onClick: () => void }>`
  position: absolute;
  top: 16px;
  right: 20px;
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ModalHeader = styled.div<CardStyleProps>`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 1.5px solid
    ${({ $situationColor }) => ensureHexColor($situationColor.backCardColor)};
  padding-bottom: 0.5rem;
`;

export const ModalHeader_left = styled.div``;

export const ModalHeader_right = styled.div``;

export const ModalHeader_title = styled.p<CardStyleProps>`
  ${FONT.body16}
  line-height: 1.5;
  letter-spacing: -0.32px;
  color: ${({ $situationColor }) =>
    ensureHexColor($situationColor.mainCardColor)};
`;

export const ModalHeader_desc = styled.p`
  ${FONT.title20};
  letter-spacing: -0.4px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors["-grayscale-800"]};
`;

export const ModalHeader_date = styled.p`
  ${FONT.caption14}
  line-height: 1.3;
  letter-spacing: -0.28px;
`;

export const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 0.5rem;
`;

export const ModalContents_metrics = styled.div<CardStyleProps>`
  position: relative;
  overflow: hidden;
  display: flex;
  padding: 0.5rem 0.75rem;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 4px;
  background-color: ${({ $situationColor }) =>
    ensureHexColor($situationColor.mainCardColor)};
  height: 60px;
  align-items: center;
`;

export const ModalContents_metrics_left = styled.div`
  display: flex;
  align-items: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const ModalContents_metrics_currentOrder = styled.p`
  color: ${(props) => props.theme.colors["--point-beige"]};
  font-family: "esamanru OTF";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: ${(props) => props.theme.weight["--font-weight-medium"]};
  line-height: 1.5;
  letter-spacing: -0.36px;
  width: 30px;
  height: auto;
`;

export const ModalContents_metrics_topic = styled.p`
  color: ${(props) => props.theme.colors["--point-beige"]};
  font-family: "esamanru OTF";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: ${(props) => props.theme.weight["--font-weight-light"]};
  line-height: 1.5;
  letter-spacing: -0.28px;
  width: 133px;
`;

export const ModalContents_metrics_right = styled.div`
  width: 33px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: stretch;
  z-index: 1;
`;

export const ModalContents_metrics_topicOrder = styled.p<CardStyleProps>`
  color: ${({ $situationColor }) =>
    ensureHexColor($situationColor.backCardColor)};
  font-family: Pretendard;
  font-size: 0.75rem;
  font-weight: ${(props) => props.theme.weight["--font-weight-semiBold"]};
  line-height: 1.3;
  letter-spacing: -0.72px;
`;

export const ModalContents_bg = styled.div<CardStyleProps>`
  width: 7.375rem;
  height: 5.75rem;
  transform: rotate(90deg);
  position: absolute;
  right: -1.3125rem;
  bottom: -2.1875rem;
  border-radius: 0rem 0rem 3.75rem 3.75rem;
  background: ${({ $situationColor }) =>
    ensureHexColor($situationColor.boldColor)};
`;

export const ModalBottom = styled.div<CardStyleProps>`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 1.5px solid
    ${({ $situationColor }) => ensureHexColor($situationColor.backCardColor)};
  padding-bottom: 0.5rem;
`;

export const LastTitle = styled.p`
  color: ${(props) => props.theme.colors["--grayscale-800"]};
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 1.1375rem */
  letter-spacing: -0.0175rem;
`;
