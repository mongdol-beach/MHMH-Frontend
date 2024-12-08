import * as S from "./styled";
import IconArrow from "@assets/icons/left-arrow.svg";
import { useNavigate } from "react-router-dom";

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
      <S.Title>밸런스게임</S.Title>
      <div />
    </S.Container>
  );
};

export default Header;
