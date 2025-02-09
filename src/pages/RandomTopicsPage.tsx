import { Helmet } from "react-helmet-async";
import RandomTopics from "../components/RandomTopics";

const RandomTopicsPage = () => {
  return (
    <>
      <Helmet>
        <title>랜덤 토픽 | 말해머해</title>
      </Helmet>
      <RandomTopics />
    </>
  );
};

export default RandomTopicsPage;
