import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors["--card-color-blue-100"]};
  height: 100vh;
`;

export const AppContainer = styled.div`
  background-color: #fff;
  max-width: 375px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
