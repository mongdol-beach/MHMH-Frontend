import Header from "../Header";
import LoginList from "./LoginList";
import LoginText from "./LoginText";
import * as S from "./styled";

const Login = () => {
  return (
    <>
      <Header title="로그인" hasHomeIcon={false} />
      <S.Container>
        <LoginText />
        <LoginList />
      </S.Container>
    </>
  );
};

export default Login;
