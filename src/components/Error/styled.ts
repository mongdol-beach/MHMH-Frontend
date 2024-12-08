import styled from "styled-components";
import FONT from "../../styles/font";

export const ErrorContainer = styled.div`
  margin-top: 8.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 0 56px;
`;

export const ErrorTextArea = styled.div`
  margin-bottom: 44px;
`;

export const ErrorMessageP = styled.p`
  color: ${(props) => props.theme.colors["--grayscale-800"]};
  text-align: center;
  ${FONT.body16}
  line-height: 1.5;
  letter-spacing: -0.32px;
  margin: 0;
`;

export const ErrorMessageSpan = styled.p`
  color: ${(props) => props.theme.colors["--grayscale-800"]};
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;

  letter-spacing: -0.36px;
  margin: 0;
`;

export const Button = styled.button`
  border-radius: 5.375rem;
  padding: 0.75rem 0;
  ${FONT.sub_title16};
  color: ${(props) => props.theme.colors["-grayscale-50"]};
  width: 100%;
`;

export const ErrorBtn = styled(Button)`
  background-color: ${(props) => props.theme.colors["-grayscale-800"]};
`;
