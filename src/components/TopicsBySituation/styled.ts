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
