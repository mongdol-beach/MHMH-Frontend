import Main from "../components/Main";
import { Helmet } from "react-helmet";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>말해머해 | 대화를 시작하는 가장 쉬운 방법</title>
      </Helmet>
      <Main />
    </>
  );
};

export default MainPage;
