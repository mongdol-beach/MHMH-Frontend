import { ReactNode } from "react";
import * as S from "./styled";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return <S.AppContainer>{children}</S.AppContainer>;
};

export default AppLayout;
