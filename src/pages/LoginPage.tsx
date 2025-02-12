import { Helmet } from "react-helmet-async";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>로그인 | 말해머해</title>
      </Helmet>
      <Login />
    </>
  );
};

export default LoginPage;
