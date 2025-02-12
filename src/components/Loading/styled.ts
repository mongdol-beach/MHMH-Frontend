import styled from "styled-components";
import FONT from "../../styles/font";

export const LoadingContainer = styled.div`
  margin-top: 8.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoadingImage = styled.img`
  width: 13.25rem;
  height: 13.25rem;
`;

export const LoadingSubText = styled.p`
  ${FONT.body16}
`;

export const LoadingText = styled.p`
  ${FONT.title20}
  font-size:1.125rem;
`;
