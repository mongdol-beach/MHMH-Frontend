import { ReactNode } from "react";
import * as S from "./styled";
import MainLogoIcon from "@assets/icons/main-logo.svg";

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <S.LayoutWrapper>
      {/* 좌측 패널: 브랜드 로고 및 소개 */}
      <S.SidePanel $gradientDirection="right">
        <S.PanelContent>
          <S.BrandLogoContainer>
            <S.BrandLogo src={MainLogoIcon} alt="회사 로고" />
            <S.BrandName>말해머해</S.BrandName>
          </S.BrandLogoContainer>
          <S.BrandDescription>
            어색한 상황에서도 대화가 끊기지 않도록,
            <br />
            쉽고 재미있는 토픽을 추천해 드려요!
          </S.BrandDescription>
        </S.PanelContent>
      </S.SidePanel>

      {/* 중앙 메인 콘텐츠 영역 */}
      <S.MainContent>
        <S.ContentArea>{children}</S.ContentArea>
      </S.MainContent>

      {/* 우측 패널: 사용 방법 안내 */}
      <S.SidePanel>
        <S.InstructionPanelContent>
          <div>
            <S.PanelSectionTitle>Tip!</S.PanelSectionTitle>
            <S.PanelContentText>
              <S.HighlightText>
                첫 만남, 소개팅, 친구들과의 게임
              </S.HighlightText>{" "}
              등에서 활용해보세요!
            </S.PanelContentText>
          </div>
          <div>
            <S.PanelSectionTitle>어떻게 사용하나요?</S.PanelSectionTitle>
            <S.InstructionDescription>
              <S.InstructionList>
                <S.InstructionItem>
                  1. 메인에서 <S.HighlightText>원하는 모드</S.HighlightText>에
                  진입하세요!
                </S.InstructionItem>
                <S.InstructionItem>
                  2. 추천된{" "}
                  <S.HighlightText>토픽을 참고해 대화를 시작</S.HighlightText>
                  하세요.
                </S.InstructionItem>
                <S.InstructionItem>
                  3. 카드를 한번 더 터치하면{" "}
                  <S.HighlightText>대화 팁</S.HighlightText>을 볼 수 있어요.
                </S.InstructionItem>
              </S.InstructionList>
            </S.InstructionDescription>
          </div>
        </S.InstructionPanelContent>
      </S.SidePanel>
    </S.LayoutWrapper>
  );
}

export default AppLayout;
