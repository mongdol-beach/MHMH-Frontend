import styled from "styled-components";
import FONT, { WEIGHT } from "../../styles/font";

export const Main = styled.main``;

export const SituationBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.69rem;
  margin-bottom: 0.69rem;
`;

export const Situation = styled.div`
  ${FONT.headline28}
`;

export const ViewAllTopicsButton = styled.button`
  ${FONT.caption12}
  padding: 0.25rem 0.75rem;
  background-color: ${(props) => props.theme.colors["--card-color-beige"]};
  border-radius: 4.56rem;
  font-weight: ${WEIGHT["--font-weight-bold"]};
  margin-top: 0.69rem;
`;

export const CardStackContainer = styled.div`
  padding: 0 1.5rem;
  margin-top: 1.19rem;
`;

export const CardStack = styled.div`
  position: relative;
  width: 100%;
  height: 29.86rem;
`;

export const Card = styled.div<{ order: number }>`
  position: absolute;
  bottom: ${({ order }) => order * 1.19}rem;
  opacity: ${({ order }) => 1 - order * 0.2};
  width: 100%;
  height: 27.3rem;
  background: #ffc0cb;
  border-radius: 16px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transform: scale(${({ order }) => 1 - order * 0.05});
  z-index: ${({ order }) => 5 - order};
`;
