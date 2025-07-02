import { useParams } from "react-router-dom";
import Header from "../components/Header";

import TopicList from "../components/TopicList";
import { Helmet } from "react-helmet-async";
import { Situation } from "../types";
import { useGetPersonTopicList } from "../hooks/useGetPersonTopicList";

function PersonTopicListPage() {
  const { id: situation } = useParams();
  const { data } = useGetPersonTopicList(situation as Situation);
  return (
    <>
      <Helmet>
        <title>{data.situationName} 토픽 | 말해머해</title>
      </Helmet>
      <Header title={data.situationName} hasHomeIcon={false} />
      <TopicList
        topicList={data.topics}
        situationName={data.situationName}
        situationColor={data.situationColor}
      />
    </>
  );
}

export default PersonTopicListPage;
