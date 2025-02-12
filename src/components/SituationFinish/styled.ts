import styled from "styled-components";
import FONT from "../../styles/font";
import { Link } from "react-router-dom";
import { CardStyleProps } from "../Card/CardFront/styled";
import { ensureHexColor } from "../Card";

export const HorizonDiv = styled.div`
  display: flex;
  gap: 10px;
`;

/* Finish 컴포넌트 */

export const EmptyCircleContainer = styled.div`
  position: relative;
  margin: 5.375rem auto 1.5rem auto;
  text-align: center;
  width: 9.375rem;
  height: 9.375rem;
`;

export const EmptyLabel = styled.p<CardStyleProps>`
  text-align: center;
  font-family: "esamanru OTF";
  font-size: 6.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: 9.375rem;
  letter-spacing: -0.125rem;
  color: ${(props) => ensureHexColor(props.$situationColor?.backCardColor)};
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Comment = styled.p`
  text-align: center;
  ${FONT.body16}
`;

export const CommentBold = styled.span`
  color: ${(props) => props.theme.colors["-grayscale-800"]};
  font-family: "esamanru OTF";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.6875rem;
  letter-spacing: -0.0225rem;
`;

export const ButtonContainer = styled.div`
  padding: 0 3.5rem;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const HandleNextLink = styled(Link)`
  border-radius: 5.375rem;
  width: 100%;
  padding: 0.75rem 0;
  background-color: ${(props) => props.theme.colors["--grayscale-800"]};
  display: flex;
  justify-content: center;
  gap: 2px;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #000000;
  }

  &:active {
    filter: brightness(0.8);
  }
`;

export const handleNextP = styled.p`
  ${FONT.sub_title16};
  color: ${(props) => props.theme.colors["-grayscale-50"]};
  line-height: 24px;
  letter-spacing: -0.02em;
`;

export const Button = styled.button`
  border-radius: 5.375rem;
  width: 100%;
  padding: 0.75rem 0;
  ${FONT.sub_title16};
  color: ${(props) => props.theme.colors["-grayscale-50"]};
`;

export const SummaryBtn = styled(Button)`
  background-color: ${(props) => props.theme.colors["--Primary-blue-500"]};
  &:hover {
    box-shadow: inset 3px 4px 3px rgba(0, 0, 0, 0.3);
  }

  &:active {
    filter: brightness(0.8);
  }
`;
export const Footer = styled.div`
  border-top: 0.5px solid ${(props) => props.theme.colors["-grayscale-400"]};
  padding: 16px 0 40px;
  margin: 40px auto 0 auto;
`;

export const FooterP = styled.p`
  ${FONT.caption14};
  line-height: 18.2px;
  text-align: center;
`;

export const ShareContainer = styled.div`
  display: flex;
  gap: 32px;
  margin: 10px auto 0 auto;
  justify-content: center;
`;

export const ShareImage = styled.img`
  cursor: pointer;
`;

export const FooterStrong = styled.span`
  ${FONT.sub_title14};
  line-height: 21px;
`;
