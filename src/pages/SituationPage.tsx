import { Helmet } from "react-helmet-async";
import Situation from "../components/Situation";

const SituationPage = () => {
  return (
    <>
      <Helmet>
        <title>상황별 토픽 | 말해머해</title>
      </Helmet>
      <Situation />
    </>
  );
};

export default SituationPage;
