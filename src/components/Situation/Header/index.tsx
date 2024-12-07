import * as S from "./styled";
import IconArrow from "@assets/icons/icon-arrow.svg";
import IconHome from "@assets/icons/icon-home.svg";
import { Link } from "react-router-dom";
import PAGE_PATH from "../../../constants/path";

const Header = () => {
  return (
    <S.Container>
      <S.Icon src={IconArrow} />
      <S.Title>상황별 토픽</S.Title>
      <Link to={PAGE_PATH.MAIN}>
        <S.Icon src={IconHome} />
      </Link>
    </S.Container>
  );
};

export default Header;
