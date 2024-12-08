import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 375px;
  width: 100%;
  height: 812px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 375px) {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;
