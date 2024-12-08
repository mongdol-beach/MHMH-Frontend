import { Topic as TopicType } from "../../types";
import * as S from "./styled";
import Topic from "./Topic";

interface TopicListProps {
  topicList: TopicType[];
  situationName: string;
}

function TopicList({ topicList, situationName }: TopicListProps) {
  return (
    <S.TopicList>
      {topicList.map((topic) => (
        <Topic key={topic.id} topic={topic} situationName={situationName} />
      ))}
    </S.TopicList>
  );
}

export default TopicList;
