import styled from "styled-components";
import { CardStyleProps } from "../../Card/CardFront/styled";

export const CardBox = styled.div`
  position: absolute;
  left: 50%;
  top: 19%;
  transform: translateX(-50%);
`;

export const CloseButton = styled.button<CardStyleProps>`
  width: 4.3125rem;
  height: 4.3125rem;
  padding: 1.25rem;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 3px;
  border-radius: 2.15625rem;
  background-color: #fff;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  bottom: -20%;
  left: 50%;
  transform: translateX(-50%);

  &:hover {
    transition: 0.75s;
  }
`;

export const Close = styled.img``;
