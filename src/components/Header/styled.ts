import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 999;
  border-bottom: 1px solid ${(props) => props.theme.colors["-grayscale-200"]};
`;

export const Title = styled.h1`
  font-family: "esamanru OTF";
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: -0.011rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Icon = styled.img``;

export const NavigateBackButton = styled.button``;
