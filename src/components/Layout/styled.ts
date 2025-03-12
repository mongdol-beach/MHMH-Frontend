import styled from "styled-components";
import FONT from "../../styles/font";

export const LayoutWrapper = styled.div`
  display: flex;
`;

interface SidePanelProps {
  $gradientDirection?: "left" | "right";
}

export const SidePanel = styled.aside<SidePanelProps>`
  background: ${({ $gradientDirection = "left" }) =>
    $gradientDirection === "left"
      ? "linear-gradient(90deg, #dce3f8 0%, #e8eeff 32.5%)"
      : "linear-gradient(90deg, #e8eeff 67.5%, #dce3f8 100%)"};

  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 31.5rem;
`;

export const PanelContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 86.438rem) {
    display: none;
  }
`;

export const InstructionPanelContent = styled(PanelContent)`
  align-items: flex-start;
  gap: 3.5rem;
`;

export const MainContent = styled.main`
  background: ${(props) => props.theme.colors["--card-color-blue-100"]};
  height: 100dvh;
  flex: 0 0 375px;
  min-height: 100dvh;
  margin: 0 auto;
`;

export const ContentArea = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BrandLogoContainer = styled.div`
  position: relative;
`;

export const BrandLogo = styled.img`
  position: absolute;
  z-index: 1;
  left: 50%;
  bottom: 1.1rem;
  transform: translateX(-50%);
`;

export const BrandName = styled.h1`
  color: ${(props) => props.theme.colors["--grayscale-900"]};
  position: relative;
  z-index: 2;
  font-family: RixYeoljeongdo;
  font-size: 2.5rem;
  line-height: 90%;
  letter-spacing: -0.07425rem;
  white-space: nowrap;
`;

export const BrandDescription = styled.p`
  font-size: 1.25rem;
  line-height: 150%;
  letter-spacing: -0.025rem;
  margin-top: 1.75rem;
  text-align: center;
  color: ${(props) => props.theme.colors["--grayscale-800"]};
`;

export const PanelSectionTitle = styled.h2`
  ${FONT.title18}
  font-family: "Esamanru OTF";
  font-weight: 500;
  color: ${(props) => props.theme.colors["--Primary-blue-700"]};
  margin-bottom: 0.5rem;
  margin-top: 0;
`;

export const PanelContentText = styled.p`
  ${FONT.title20}
  font-weight: 500;
  font-family: "Pretendard";
  color: ${(props) => props.theme.colors["--grayscale-800"]};
`;

export const HighlightText = styled.span`
  font-weight: 700;
`;

export const InstructionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const InstructionItem = styled.li`
  ${FONT.title20}
  font-weight: 500;
  font-family: "Pretendard";
  color: ${(props) => props.theme.colors["--grayscale-800"]};
`;

export const InstructionDescription = styled(BrandDescription)`
  margin-top: 0;
  text-align: left;
`;
