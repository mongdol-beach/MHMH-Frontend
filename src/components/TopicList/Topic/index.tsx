import * as S from "./styled";
import SemiCircleIcon from "@assets/icons/semi-circle.svg";
import { Topic as TopicType } from "../../../types";
import TopicCardModal from "../../Modal/TopicCardModal";
import { overlay } from "overlay-kit";

interface TopicProps {
  topic: TopicType;
  situationName: string;
}

function Topic({ topic, situationName }: TopicProps) {
  return (
    <S.Topic>
      <S.TopicButton
        type="button"
        onClick={() => {
          overlay.open(({ isOpen, close, unmount }) => {
            return (
              <TopicCardModal
                id={topic.id}
                content={topic.content}
                situationName={situationName}
                isOpen={isOpen}
                onClose={() => {
                  close();

                  setTimeout(() => {
                    unmount();
                  }, 250);
                }}
              />
            );
          });
        }}
      >
        <S.NumberBox>
          <S.SemiCircleIcon src={SemiCircleIcon} />
          <S.NumberText>{topic.id}</S.NumberText>
        </S.NumberBox>
        <S.Content>{topic.content}</S.Content>
        <S.TopicText>{situationName}</S.TopicText>
      </S.TopicButton>
    </S.Topic>
  );
}

export default Topic;
