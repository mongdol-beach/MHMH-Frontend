import styled from "styled-components";
import FONT from "../../styles/font";
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

export const CommentBold = styled.p`
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
