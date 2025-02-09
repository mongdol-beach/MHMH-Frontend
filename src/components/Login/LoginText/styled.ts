import styled from "styled-components";

export const Box = styled.div`
  margin: 3.5rem 0 9.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors["--grayscale-800"]};
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.025rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors["--grayscale-900"]};
  font-family: RixYeoljeongdo;
  font-size: 2.5rem;
  line-height: 90%;
  letter-spacing: -0.055rem;
`;
