import styled, { DefaultTheme } from "styled-components";
import { Link } from "react-router-dom";
import FONT from "../../styles/font";

export const Main = styled.main``;

export const ProgressBarBox = styled.div`
  display: flex;
  padding: 0.75rem 1rem;
  flex-direction: column;
  align-items: center;
`;

export const ProgressBar = styled.div`
  width: 21.4375rem;
  height: 0.87388rem;
  background-color: ${(props) => props.theme.colors["-grayscale-100"]};
  border-radius: 0.62419rem;
`;

export const ProgressFill = styled.div<{ $progressPercentage: number }>`
  height: 100%;
  background-color: ${(props) => props.theme.colors["--card-color-blue-500"]};
  border-radius: 0.62419rem;
  width: ${({ $progressPercentage }) => `${$progressPercentage}%`};
  transition: width 0.3s ease;
`;

export const ProgressBarCounter = styled.p`
  width: 21.4375rem;
  height: 1.125rem;
  display: flex;
  justify-content: flex-end;
`;

export const ProgressBox = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CounterText = styled.div`
  ${FONT.headline28}
  color: ${(props) => props.theme.colors["-grayscale-600"]};
  text-align: center;
`;

export const CounterTotal = styled.span`
  ${FONT.body16}
  color: ${(props) => props.theme.colors["-grayscale-300"]};
  margin-left: 0.25rem;
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  width: 100%;
`;

export const Description = styled.p`
  ${FONT.title20}
  height: 3.75rem;
  margin-top: 0.75rem;
  color: ${(props) => props.theme.colors["-grayscale-800"]};
  font-family: "esamanru OTF";
  word-break: keep-all;
  text-align: center;
`;

export const OptionBox = styled.div`
  margin-top: 1rem;
  display: flex;
  width: 100%;
  padding: 1rem 1.25rem;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
`;

// 상태 타입 정의
type ButtonState = "clicked" | "otherClicked" | "default";

// 상태별 스타일 매핑
const getButtonStyles = (state: ButtonState, theme: DefaultTheme) => {
  const styles = {
    default: `
      background: ${theme.colors["-grayscale-50"]};
      color: ${theme.colors["-grayscale-800"]};
      
      &:hover {
        background: ${theme.colors["--Primary-blue-100"]};
        color: ${theme.colors["-grayscale-800"]};
        border-color: ${theme.colors["--Primary-blue-300"]};
      }
      
      &:active {
        background: ${theme.colors["--card-color-blue-300"]};
        color: ${theme.colors["-grayscale-800"]};
        box-shadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)";
      }`,
    clicked: `
      background: ${theme.colors["--card-color-blue-300"]};
      color: ${theme.colors["--point-beige"]};
      border-color: ${theme.colors["--Primary-blue-500"]};
      box-shadow: "inset 4px 4px 4px rgba(0, 0, 0, 0.25)";
    `,
    otherClicked: `
      background: ${theme.colors["-grayscale-50"]};
      color: ${theme.colors["-grayscale-300"]};
      border-color: ${theme.colors["-grayscale-100"]};
    `,
  };

  return styles[state];
};

export const Option = styled.button<{
  $isClicked: boolean;
  $isOtherClicked: boolean;
}>`
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 50%;
  justify-content: center;
  align-items: center;
  height: 16.125rem;
  padding: 1rem 0.5rem;
  ${FONT.title18}
  word-break: keep-all;
  border-radius: 0.75rem;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.25);

  ${({ $isClicked, $isOtherClicked, theme }) => {
    const state: ButtonState = $isClicked
      ? "clicked"
      : $isOtherClicked
        ? "otherClicked"
        : "default";
    const styles = getButtonStyles(state, theme);

    return styles;
  }}
`;

export const PercentText = styled.p<{
  $isClicked: boolean;
}>`
  ${FONT.caption14}
  color: ${({ $isClicked, theme }) =>
    $isClicked
      ? theme.colors["--Primary-blue-300"]
      : theme.colors["-grayscale-400"]};

  text-align: center;
  font-weight: 400;
  position: absolute;
  bottom: 1rem;
`;

export const FinishBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 23.4375rem;
  height: 12.3rem;
  background: ${(props) => props.theme.colors["--card-color-blue-100"]};
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 16rem;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 0.75rem;
`;

export const RetryMainBox = styled.div`
  display: flex;
  height: 3rem;
  gap: 0.5rem;
`;

export const RetryButton = styled.button`
  width: 50%;
  border-radius: 5.375rem;
  background: ${(props) => props.theme.colors["--grayscale-800"]};
  color: var(--grayscale-50, #f7f9fe);
  text-align: center;

  font-family: "esamanru OTF";
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.011rem;
`;
export const MainButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  border-radius: 5.375rem;
  background: ${(props) => props.theme.colors["--grayscale-800"]};
  color: ${(props) => props.theme.colors["-grayscale-50"]};

  font-family: "esamanru OTF";
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.011rem;
`;

export const SituationButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 5.375rem;
  background: ${(props) => props.theme.colors["--card-color-blue-500"]};

  color: var(--grayscale-50, #f7f9fe);

  font-family: "esamanru OTF";
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.011rem;
`;
