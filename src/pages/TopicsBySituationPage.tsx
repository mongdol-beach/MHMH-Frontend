import { Helmet } from "react-helmet";
import TopicsBySituation from "../components/TopicsBySituation";

const TopicsBySituationPage = () => {
  return (
    <>
      <Helmet>
        <title>상황별 토픽 추천 | 말해머해</title>
      </Helmet>
      <TopicsBySituation />
    </>
  );
};

export default TopicsBySituationPage;
