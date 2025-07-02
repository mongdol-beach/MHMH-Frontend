import { Helmet } from "react-helmet-async";
import Peroson from "../components/Person";

const PersonPage = () => {
  return (
    <>
      <Helmet>
        <title>인물별 토픽 | 말해머해</title>
      </Helmet>
      <Peroson />
    </>
  );
};

export default PersonPage;
