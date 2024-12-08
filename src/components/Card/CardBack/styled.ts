import styled from "styled-components";

export const CardWrap = styled.div`
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  user-select: none;
`;

export const Card = styled.div`
  display: flex;
  width: 20.375rem;
  height: 27rem;
  padding: 1.875rem;
  border-radius: 16px;
  border: 4px solid ${(props) => props.theme.colors["--Primary-blue-500"]};
  background: #fff;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.25);
  padding: 0.88rem;
  position: relative;
`;

export const Box = styled.div`
  padding: 1rem;
  text-align: left;
  width: 100%;
`;

export const SubTitle = styled.p`
  color: ${(props) => props.theme.colors["--Primary-blue-500"]};
  font-family: "esamanru OTF";
  font-size: 0.875rem;
  line-height: 150%; /* 1.3125rem */
  display: flex;
  align-items: center;
  gap: 0.1rem;
`;

export const CardIndex = styled.span`
  color: ${(props) => props.theme.colors["--Primary-blue-500"]};
  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.0225rem;
`;

export const Title = styled.p`
  margin-top: 0.25rem;
  color: ${(props) => props.theme.colors["-grayscale-800"]};
  font-family: "esamanru OTF";
  min-height: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.0225rem;
  word-break: keep-all;
  width: 12rem;
`;

export const TipBox = styled.div`
  margin: 0.75rem 0;
  position: relative;
`;

export const TipText = styled.p`
  position: absolute;
  left: 50%;
  bottom: -300%;
  transform: translateX(-50%);
  padding: 0 1.5rem;
  background-color: #fff;
`;

export const Line = styled.hr`
  width: 100%;
  display: block;
  height: 3px;
  border: 0;
  background-color: ${(props) => props.theme.colors["--Primary-blue-300"]};
`;

export const TipList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

export const Tip = styled.li``;

export const TipItem = styled.p`
  color: ${(props) => props.theme.colors["-grayscale-800"]};
  font-size: 0.75rem;
  font-weight: 800;
  line-height: 130%;
  letter-spacing: -0.035rem;
  margin-bottom: 0.12rem;
`;

export const TipSubList = styled.ul``;

export const TipSubItem = styled.li`
  color: ${(props) => props.theme.colors["-grayscale-800"]};
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.035rem;
  list-style: disc;
  margin-left: 0.75rem;
  word-break: keep-all;
`;

export const CardDotEffect = styled.img`
  position: absolute;
  left: 0;
  top: 0;
`;

export const CardBackIcon = styled.img`
  position: absolute;
  right: 0.88rem;
  top: 0.88rem;
`;
