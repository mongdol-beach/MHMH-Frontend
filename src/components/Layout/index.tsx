import { ReactNode } from "react";
import * as S from "./styled";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <S.Container>
      <S.AppContainer>{children}</S.AppContainer>
    </S.Container>
  );
};

export default AppLayout;
