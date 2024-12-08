import { useParams } from "react-router-dom";
import Header from "../components/Header";

import { useGetTopicList } from "../hooks/useGetTopicList";
import TopicList from "../components/TopicList";

function TopicListPage() {
  const { id } = useParams();
  const { data } = useGetTopicList(id!);

  if (!data) {
    return null;
  }

  return (
    <>
      <Header title="#소개팅 토픽" hasHomeIcon={false} />
      <TopicList topicList={data.topics} />
    </>
  );
}

export default TopicListPage;
