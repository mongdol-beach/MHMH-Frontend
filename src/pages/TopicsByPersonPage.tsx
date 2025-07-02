import { Helmet } from "react-helmet-async";
import TopicsByPerson from "../components/TopicsByPerson";

const TopicsByPersonPage = () => {
  return (
    <>
      <Helmet>
        <title>인물별 토픽 추천 | 말해머해</title>
      </Helmet>
      <TopicsByPerson />
    </>
  );
};

export default TopicsByPersonPage;
