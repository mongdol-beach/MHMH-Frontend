import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 375px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  position: relative;
  margin: 0 auto;
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
