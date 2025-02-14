/* SummaryModal */

import styled from "styled-components";
import FONT from "../../../styles/font";

export const Content = styled.div`
  background-color: white;
  padding: 16px 20px;
  border-radius: 8px;
  width: 90%;
  position: absolute;
  left: 50%;
  top: 19%;
  transform: translateX(-50%);
`;



export const CloseIcon = styled.img`
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

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 1.5px solid
    ${(props) => props.theme.colors["--card-color-sky_b"]};
  padding-bottom: 0.5rem;
`;

export const ModalHeaderLeft = styled.div``;

export const ModalHeaderRight = styled.div``;

export const ModalHeaderTitle = styled.p`
  ${FONT.body16}
  line-height: 1.5;
  letter-spacing: -0.32px;
  color: ${(props) => props.theme.colors["--Primary-blue-500"]};
`;

export const ModalHeaderDesc = styled.p`
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

export const Metrics = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  padding: 0.5rem 0.75rem;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors["--Primary-blue-500"]};
  height: 60px;
  align-items: center;
`;

export const MetricsLeft = styled.div`
  display: flex;
  align-items: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const MetricsCurrentOrder = styled.p`
  color: ${(props) => props.theme.colors["--card-color-beige"]};
  font-family: "esamanru OTF";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: ${(props) => props.theme.weight["--font-weight-medium"]};
  line-height: 1.5;
  letter-spacing: -0.36px;
  width: 30px;
  height: auto;
`;

export const MetricsTopic = styled.p`
  color: ${(props) => props.theme.colors["--card-color-beige"]};
  font-family: "esamanru OTF";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: ${(props) => props.theme.weight["--font-weight-light"]};
  line-height: 1.5;
  letter-spacing: -0.28px;
  width: 133px;
`;

export const MetricsRight = styled.div`
  width: 33px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: stretch;
  z-index: 1;
`;

export const MetricsTopicOrder = styled.p`
  color: ${(props) => props.theme.colors["--card-color-sky_b"]};
  font-family: Pretendard;
  font-size: 0.75rem;
  font-weight: ${(props) => props.theme.weight["--font-weight-semiBold"]};
  line-height: 1.3;
  letter-spacing: -0.72px;
`;

export const ModalContentsBg = styled.div`
  width: 118px;
  height: 92px;
  transform: rotate(90deg);
  position: absolute;
  right: -21px;
  bottom: -51px;
  border-radius: 0px 0px 60px 60px;
  background: ${(props) => props.theme.colors["--Primary-blue-700"]};
`;

