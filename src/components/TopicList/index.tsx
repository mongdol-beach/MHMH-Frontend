import { Topic as TopicType } from "../../types";
import * as S from "./styled";
import Topic from "./Topic";

interface TopicListProps {
  topicList: TopicType[];
}

function TopicList({ topicList }: TopicListProps) {
  return (
    <S.TopicList>
      {topicList.map((topic) => (
        <Topic key={topic.id} topic={topic} />
      ))}
    </S.TopicList>
  );
}

export default TopicList;
