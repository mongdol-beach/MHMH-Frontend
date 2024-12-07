import * as S from "./styled";
import IconArrow from "@assets/icons/icon-arrow.svg";
import IconHome from "@assets/icons/icon-home.svg";
import { Link, useNavigate } from "react-router-dom";
import PAGE_PATH from "../../../constants/path";

const Header = () => {
  const navigate = useNavigate();

  const handleClickBackButton = () => {
    navigate(-1);
  };

  return (
    <S.Container>
      <S.Icon src={IconArrow} onClick={handleClickBackButton} clickable />
      <S.Title>상황별 토픽</S.Title>
      <Link to={PAGE_PATH.MAIN}>
        <S.Icon src={IconHome} />
      </Link>
    </S.Container>
  );
};

export default Header;
