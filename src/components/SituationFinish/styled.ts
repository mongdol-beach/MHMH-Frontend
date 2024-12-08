import styled from "styled-components";
import FONT from "../../styles/font";

/* Finish 컴포넌트 */

export const EmptyCircleContainer = styled.div`
  position: relative;
  margin: 5.375rem auto 1.5rem auto;
  text-align: center;
  width: 9.375rem;
  height: 9.375rem;
`;

export const EmptyLabel = styled.p`
  text-align: center;
  font-family: "esamanru OTF";
  font-size: 6.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: 9.375rem;
  letter-spacing: -0.125rem;
  color: ${(props) => props.theme.colors["-grayscale-100"]};
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Comment = styled.p`
  text-align: center;
  ${FONT.body16}
`;

export const CommentBold = styled.span`
  color: ${(props) => props.theme.colors["-grayscale-800"]};
  font-family: "esamanru OTF";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.6875rem;
  letter-spacing: -0.0225rem;
`;

export const ButtonContainer = styled.div`
  padding: 0 3.5rem;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Button = styled.button`
  border-radius: 5.375rem;
  padding: 0.75rem 0;
  ${FONT.sub_title16};
  color: ${(props) => props.theme.colors["-grayscale-50"]};
`;

export const reTryBtn = styled(Button)`
  background-color: ${(props) => props.theme.colors["-grayscale-800"]};
`;

export const SummaryBtn = styled(Button)`
  background-color: ${(props) => props.theme.colors["--card-color-blue"]};
`;

/* Modal */

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

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 1.5px solid
    ${(props) => props.theme.colors["--card-color-sky_b"]};
  padding-bottom: 0.5rem;
`;

export const ModalHeader_left = styled.div``;

export const ModalHeader_right = styled.div``;

export const ModalHeader_title = styled.p`
  ${FONT.body16}
  line-height: 1.5;
  letter-spacing: -0.32px;
  color: ${(props) => props.theme.colors["--card-color-blue"]};
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
  border-bottom: 1.5px solid
    ${(props) => props.theme.colors["--card-color-sky_b"]};
  padding-bottom: 0.5rem;
`;

export const ModalContents_metrics = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  padding: 0.5rem 0.75rem;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors["--card-color-blue"]};
`;

export const ModalContents_metrics_left = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const ModalContents_metrics_currentOrder = styled.p`
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

export const ModalContents_metrics_topic = styled.p`
  color: ${(props) => props.theme.colors["--card-color-beige"]};
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

export const ModalContents_metrics_topicOrder = styled.p`
  color: ${(props) => props.theme.colors["--card-color-sky_b"]};
  font-family: Pretendard;
  font-size: 0.75rem;
  font-weight: ${(props) => props.theme.weight["--font-weight-semiBold"]};
  line-height: 1.3;
  letter-spacing: -0.72px;
`;

export const ModalContents_bg = styled.div`
  width: 118px;
  height: 92px;
  transform: rotate(90deg);
  position: absolute;
  right: -21px;
  bottom: -51px;
  border-radius: 0px 0px 60px 60px;
  background: ${(props) => props.theme.colors["--Primary-blud-700"]};
`;

export const ModalFooter = styled.p`
  ${FONT.caption14};
  line-height: 1.3;
  letter-spacing: -0.28;
  color: ${(props) => props.theme.colors["-grayscale-800"]};
  text-align: center;
`;
