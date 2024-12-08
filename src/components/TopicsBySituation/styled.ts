import styled from "styled-components";
import FONT from "../../styles/font";

export const Main = styled.main``;

export const SituationBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 2.75rem;
`;

export const Situation = styled.div`
  ${FONT.headline28}
`;

export const ViewAllTopicsButton = styled.button`
  ${FONT.caption14}
  padding: 0.25rem 0.75rem;
  color: white;
  background-color: ${(props) => props.theme.colors["-grayscale-800"]};
  border-radius: 4.56rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
`;

export const ProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const ProgressText = styled.span`
  ${FONT.body16}
  opacity: 0.5;
`;

export const Icon = styled.img``;
