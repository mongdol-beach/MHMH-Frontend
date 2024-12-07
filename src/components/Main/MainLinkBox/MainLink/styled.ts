import styled from "styled-components";

export const Topic = styled.a<{ $width: string; $height: string }>`
  display: flex;
  width: ${(props) => `${props.$width}rem`};
  height: ${(props) => `${props.$height}rem`};
  padding: 0.75rem 0.875rem;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors["-grayscale-50"]};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
  flex-grow: 0;
`;

export const Title = styled.p`
  font-family: "esamanru OTF";
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.025rem;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors["-grayscale-600"]};
  font-size: 0.75rem;
  line-height: 130%;
  letter-spacing: -0.045rem;
`;
