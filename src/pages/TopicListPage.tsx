import { useParams } from "react-router-dom";
import Header from "../components/Header";

import { useGetTopicList } from "../hooks/useGetTopicList";
import TopicList from "../components/TopicList";

function TopicListPage() {
  const { id: situation } = useParams();
  const { data } = useGetTopicList(situation!);

  return (
    <>
      <Header title={data.situationName} hasHomeIcon={false} />
      <TopicList topicList={data.topics} situationName={data.situationName} />
    </>
  );
}

export default TopicListPage;
