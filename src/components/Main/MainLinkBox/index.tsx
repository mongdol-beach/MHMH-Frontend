import * as S from "./styled";
import MainLink from "./MainLink";
import PAGE_PATH from "../../../constants/path";
import { COLORS } from "../../../styles/color";
import MainEffect1 from "@assets/icons/main-effect2.svg";
import MainEffect2 from "@assets/icons/main-effect1.svg";
import MainEffect3 from "@assets/icons/main-effect4.svg";
import MainEffect4 from "@assets/icons/main-effect3.svg";
import RightArrowIcon from "@assets/icons/right-arrow.svg";
import useModal from "../../../hooks/useModal";
import FeedbackModal from "../../Modal/FeedbackModal";

export type ColorKey = keyof typeof COLORS;

export interface Topic {
  to: string;
  bgColor: ColorKey;
  subTitle: string;
  title: string;
  lineBreakTitle?: string;
  image: string;
  height: string;
}

const TOPICS: Topic[] = [
  {
    to: PAGE_PATH.SITUATION,
    bgColor: "--Primary-blue-300",
    subTitle: "자연스러운 대화",
    title: "상황별 토픽",
    image: MainEffect1,
    height: "10.25",
  },
  {
    to: PAGE_PATH.TOPICS_RANDOM,
    bgColor: "--purple-300",
    subTitle: "색다른 대화",
    title: "랜덤 토픽",
    image: MainEffect2,
    height: "10.25",
  },
  {
    to: PAGE_PATH.TOPICS_RANDOM,
    bgColor: "--pink-300",
    subTitle: "알아가는 대화",
    title: "인물별 토픽",
    image: MainEffect3,
    height: "10.25",
  },
  {
    to: PAGE_PATH["BALANCE-GAME"],
    bgColor: "--orange-300",
    subTitle: "재미있는 대화",
    title: "밸런스 게임",
    image: MainEffect4,
    height: "6.5",
  },
];

const MainLinkBox = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <S.LinkBox>
      <S.LinkTop>
        <MainLink topic={TOPICS[0]} />
        <MainLink topic={TOPICS[1]} />
      </S.LinkTop>
      <S.LinkBottom>
        <S.LinkBottomLeft>
          <MainLink topic={TOPICS[2]} />
        </S.LinkBottomLeft>

        <S.LinkBottomRight>
          <MainLink topic={TOPICS[3]} />
          <S.UserFeedbackButton type="button" onClick={openModal}>
            사용 후기
            <S.ArrowIcon src={RightArrowIcon} />
          </S.UserFeedbackButton>
        </S.LinkBottomRight>
      </S.LinkBottom>
      <FeedbackModal isOpen={isOpen} closeModal={closeModal}></FeedbackModal>
    </S.LinkBox>
  );
};

export default MainLinkBox;
