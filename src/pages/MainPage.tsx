import styled from "styled-components";

const Test = styled.a`
  color: blue;
  font-size: 1rem;
`;

const MainPage = () => {
  return <Test href="/">메인 페이지 스타일 테스트</Test>;
};

export default MainPage;
