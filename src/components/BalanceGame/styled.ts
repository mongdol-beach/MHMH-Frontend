import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main``;

export const ProgressBarBox = styled.div`
  display: flex;
  width: 23.4375rem;
  height: 4.0625rem;
  padding: 0.75rem 1rem;
  flex-direction: column;
  align-items: center;
  gap: 0.56rem;
  margin-bottom: 2rem;
`;
export const ProgressBar = styled.div`
  width: 21.4375rem;
  height: 0.87388rem;
  background-color: ${(props) => props.theme.colors["-grayscale-100"]};
  border-radius: 0.62419rem;
`;
export const ProgressFill = styled.div<{ progressPercentage: number }>`
  height: 100%;
  background-color: ${(props) => props.theme.colors["--card-color-blue-500"]};
  border-radius: 0.62419rem;
  width: ${({ progressPercentage }) => `${progressPercentage}%`};
  transition: width 0.3s ease;
`;

export const ProgressBarCounter = styled.p`
  width: 21.4375rem;
  height: 1.125rem;
  display: flex;
  justify-content: flex-end;
`;

export const CounterText = styled.p`
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1375rem;
  letter-spacing: -0.0175rem;
  color: ${(props) => props.theme.colors["-grayscale-600"]};
  text-align: right;
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.75rem;
  margin-bottom: 3rem;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors["-grayscale-800"]};
  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: 600;
  height: 3.375rem;
  line-height: 1.6875rem;
  letter-spacing: -0.0225rem;
`;

export const OptionBox = styled.div`
  display: flex;
  width: 19rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Option = styled.button<{
  isClicked: boolean;
  isOtherClicked: boolean;
}>`
  height: 9rem;
  padding: 1rem;
  font-family: "esamanru OTF";
  font-size: 1.125rem;
  font-style: normal;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors["-grayscale-200"]};
  box-shadow: ${({ isClicked }) =>
    isClicked ? "0px 2px 16px rgba(88, 129, 243, 1)" : "none"};
  background: ${({ isClicked, isOtherClicked, theme }) =>
    isClicked
      ? theme.colors["--card-color-blue-700"]
      : isOtherClicked
        ? theme.colors["--card-color-blue-100"]
        : theme.colors["--card-color-blue-100"]};
  color: ${({ isClicked, isOtherClicked, theme }) =>
    isClicked
      ? theme.colors["--point-beige"]
      : isOtherClicked
        ? theme.colors["-grayscale-400"]
        : theme.colors["-grayscale-800"]};

  &:hover {
    height: 9rem;
    padding: 1rem;
    font-family: "esamanru OTF";
    font-size: 1.125rem;
    font-style: normal;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 0.5rem;
    border: 1px solid ${(props) => props.theme.colors["-grayscale-200"]};

    background: ${({ isClicked, isOtherClicked, theme }) =>
      isClicked
        ? theme.colors["--card-color-blue-700"]
        : isOtherClicked
          ? theme.colors["--card-color-blue-100"]
          : theme.colors["--card-color-blue-300"]};
    color: ${({ isClicked, isOtherClicked, theme }) =>
      isClicked
        ? theme.colors["--point-beige"]
        : isOtherClicked
          ? theme.colors["-grayscale-400"]
          : theme.colors["--point-beige"]};
  }

  &:active {
    font-family: "esamanru OTF";
    font-size: 1.125rem;
    font-style: normal;
    width: 19rem;
    height: 9rem;
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 0.5rem;
    background: ${({ isClicked, isOtherClicked, theme }) =>
      isClicked
        ? theme.colors["--card-color-blue-500"]
        : isOtherClicked
          ? theme.colors["--card-color-blue-100"]
          : theme.colors["--card-color-blue-500"]};
    color: ${({ isClicked, isOtherClicked, theme }) =>
      isClicked
        ? theme.colors["--point-beige"]
        : isOtherClicked
          ? theme.colors["-grayscale-400"]
          : theme.colors["--point-beige"]};
    box-shadow: ${({ isClicked }) =>
      isClicked ? "inset 4px 4px 4px rgba(0, 0, 0, 0.25)" : "none"};
  }
`;

export const PercentText = styled.p<{
  isClicked: boolean;
}>`
  color: ${({ isClicked, theme }) =>
    isClicked ? theme.colors["--point-beige"] : theme.colors["-grayscale-400"]};

  text-align: center;
  font-family: "esamanru OTF";
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 3rem */
  letter-spacing: -0.04rem;
`;

export const ComparisonText = styled.p`
  color: ${(props) => props.theme.colors["--card-color-yellow"]};
  text-align: center;

  font-family: "esamanru OTF";
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3rem;
  letter-spacing: -0.04rem;
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
