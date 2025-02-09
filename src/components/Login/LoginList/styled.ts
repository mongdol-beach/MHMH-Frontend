import styled from "styled-components";
import { Link } from "react-router-dom";

interface SocialButtonProps {
  $textColor: string;
  $backgroundColor: string;
  $borderColor?: string;
}

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.span`
  text-align: center;
  color: ${({ theme }) => theme.colors["-grayscale-600"]};
  font-size: 0.875rem;
  line-height: 130%;
  letter-spacing: -0.0175rem;
  margin-bottom: 0.25rem;
`;

export const Item = styled.li``;

export const SocialButton = styled(Link)<SocialButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  width: 20rem;
  height: 3rem;
  color: ${({ $textColor }) => $textColor};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  ${({ $borderColor }) => $borderColor && `border: 1px solid ${$borderColor};`}
`;

export const Icon = styled.img``;

export const Text = styled.span`
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: 0.9375rem;
  font-weight: 500;
`;
