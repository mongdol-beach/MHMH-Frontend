import * as S from "./styled";
import IconArrow from "@assets/icons/left-arrow.svg";
import IconHome from "@assets/icons/home.svg";
import { Link, useNavigate } from "react-router-dom";
import PAGE_PATH from "../../constants/path";

interface HeaderProps {
  title: string;
  hasHomeIcon?: boolean;
}

const Header = ({ title, hasHomeIcon = true }: HeaderProps) => {
  const navigate = useNavigate();

  const handleClickBackButton = () => {
    navigate(-1);
  };

  return (
    <S.Container>
      <S.NavigateBackButton onClick={handleClickBackButton}>
        <S.Icon src={IconArrow} alt="이전 페이지로 돌아가기" />
      </S.NavigateBackButton>
      <S.Title>{title}</S.Title>
      {hasHomeIcon && (
        <Link to={PAGE_PATH.MAIN}>
          <S.Icon src={IconHome} alt="메인 페이지로 이동하기" />
        </Link>
      )}
    </S.Container>
  );
};

export default Header;
