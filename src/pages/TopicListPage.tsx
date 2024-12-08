import { useParams } from "react-router-dom";
import Header from "../components/Header";

import { useGetTopicList } from "../hooks/useGetTopicList";
import TopicList from "../components/TopicList";
import { Helmet } from "react-helmet";
import { Situation } from "../types";
import Loading from "../components/Loading";

function TopicListPage() {
  const { id: situation } = useParams();
  const { data, isLoading } = useGetTopicList(situation as Situation);

  return (
    <>
      <Helmet>
        <title>{data.situationName} 토픽 | 말해머해</title>
      </Helmet>
      <Header title={data.situationName} hasHomeIcon={false} />
      {isLoading ? (
        <Loading />
      ) : (
        <TopicList topicList={data.topics} situationName={data.situationName} />
      )}
    </>
  );
}

export default TopicListPage;
