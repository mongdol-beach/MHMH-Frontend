import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors["--card-color-blue-100"]};
  height: 100vh;
  max-width: 375px;
  min-height: 100vh;
  margin: 0 auto;
`;

export const AppContainer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
