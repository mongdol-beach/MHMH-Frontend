import * as S from "./styled";
import IconArrow from "@assets/icons/icon-arrow.svg";
import IconHome from "@assets/icons/icon-home.svg";

const Header = () => {
  return (
    <S.Container>
      <S.Icon src={IconArrow} />
      <S.Title>상황별 토픽</S.Title>
      <S.Icon src={IconHome} />
    </S.Container>
  );
};

export default Header;
