import * as S from "./styled";
import semiCircleIcon from "@assets/icons/semi-circle.svg";
import { Topic as TopicType } from "../../../types";

interface TopicProps {
  topic: TopicType;
}

function Topic({ topic }: TopicProps) {
  return (
    <S.Topic>
      <S.TopicButton type="button">
        <S.NumberBox>
          <S.SemiCircleIcon src={semiCircleIcon} />
          <S.NumberText>{topic.id}</S.NumberText>
        </S.NumberBox>
        <S.Content>{topic.content}</S.Content>
        <S.TopicText>#소개팅_토픽</S.TopicText>
      </S.TopicButton>
    </S.Topic>
  );
}

export default Topic;
