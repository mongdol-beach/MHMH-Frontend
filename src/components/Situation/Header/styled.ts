import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
`;

export const Title = styled.h1`
  font-family: "esamanru OTF";
  font-size: 1rem;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.011rem;
`;

export const Icon = styled.img<{ clickable?: boolean }>`
  ${(props) => props.clickable && `cursor: pointer;`}
`;
