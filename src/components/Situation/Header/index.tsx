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
      <S.NavigateBackButton onClick={handleClickBackButton}>
        <S.Icon src={IconArrow} alt="이전 페이지로 돌아가기" />
      </S.NavigateBackButton>
      <S.Title>상황별 토픽</S.Title>
      <Link to={PAGE_PATH.MAIN}>
        <S.Icon src={IconHome} alt="메인 페이지로 이동하기" />
      </Link>
    </S.Container>
  );
};

export default Header;
