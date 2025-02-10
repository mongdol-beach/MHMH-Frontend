import * as S from "./styled";
import SemiCircleIcon from "@assets/icons/semi-circle.svg";
import { Topic as TopicType } from "../../../types";
import TopicCardModal from "../../Modal/TopicCardModal";
import { overlay } from "overlay-kit";
import { ensureHexColor } from "../../Card";

interface TopicProps {
  topic: TopicType;
  situationName: string;
  $situationColor: {
    mainCardColor: string;
    backCardColor: string;
    backgroundColor: string;
    boldColor: string;
  };
}

function Topic({ topic, situationName, $situationColor }: TopicProps) {
  return (
    <S.Topic>
      <S.TopicButton
        $situationColor={{
          mainCardColor: ensureHexColor($situationColor?.mainCardColor),
          backCardColor: ensureHexColor($situationColor?.backCardColor),
          backgroundColor: ensureHexColor($situationColor?.backgroundColor),
          boldColor: ensureHexColor($situationColor?.boldColor),
        }}
        type="button"
        onClick={() => {
          overlay.open(({ isOpen, close, unmount }) => {
            return (
              <TopicCardModal
                id={topic.id}
                content={topic.content}
                situationName={situationName}
                situationColor={{
                  mainCardColor: ensureHexColor($situationColor?.mainCardColor),
                  backCardColor: ensureHexColor($situationColor?.backCardColor),
                  backgroundColor: ensureHexColor(
                    $situationColor?.backgroundColor,
                  ),
                  boldColor: ensureHexColor($situationColor?.boldColor),
                }}
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
          <S.SemiCircleIcon
            src={SemiCircleIcon}
            $situationColor={$situationColor}
          />
          <S.NumberText $situationColor={$situationColor}>
            {topic.id}
          </S.NumberText>
        </S.NumberBox>
        <S.Content>{topic.content}</S.Content>
        <S.TopicText>#{situationName}_토픽</S.TopicText>
      </S.TopicButton>
    </S.Topic>
  );
}

export default Topic;
