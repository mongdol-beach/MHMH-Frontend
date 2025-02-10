import { Topic as TopicType } from "../../types";
import { SituationColor } from "../../types/topic";
import * as S from "./styled";
import Topic from "./Topic";

interface TopicListProps {
  topicList: TopicType[];
  situationName: string;
  situationColor: SituationColor;
}

function TopicList({
  topicList,
  situationName,
  situationColor,
}: TopicListProps) {
  return (
    <S.TopicList>
      {topicList.map((topic) => (
        <Topic
          key={topic.id}
          topic={topic}
          situationName={situationName}
          $situationColor={situationColor}
        />
      ))}
    </S.TopicList>
  );
}

export default TopicList;
