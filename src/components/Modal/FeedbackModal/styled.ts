import styled from "styled-components";
import FONT from "../../../styles/font";

export const Content = styled.div`
  background-color: white;
  padding: 16px 20px;
  border-radius: 8px;
  width: 93%;
  position: absolute;
  left: 50%;
  top: 22%;
  transform: translateX(-50%);
`;


export const CloseIcon = styled.img`
  position: absolute;
  top: 16px;
  right: 20px;
  cursor: pointer;
`;

export const ModalContainer = styled.form`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
`;

export const ModalTitle = styled.p`
  ${FONT.title20}
  font-family: esamanru OTF;
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const IconDiv = styled.div`
  margin: 1rem auto 1.5rem auto;
  display: flex;
  gap: 2rem;
  justify-content: center;
  width: 100%;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const TextAreaWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 18.75rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 18.75rem;
  height: 8.5rem;
  border: none;
  border-top: 1px solid #c7c7c7;
  font-family: "Pretendard";
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 0.975rem;
  letter-spacing: -0.06em;
  padding: 0.5rem;
  background: #f7f9fe;
  box-sizing: border-box;

  &::placeholder {
    color: #939393;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  &:focus {
    outline: none;
  }
`;

export const CharacterCount = styled.span`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  font-size: 0.75rem;
  color: #939393;
`;

export const FeedBackBtn = styled.button`
  background: ${(props) => props.theme.colors["--Primary-blue-500"]};
  padding: 0.75rem 1rem;
  ${FONT.sub_title16}
  line-height: 1.5rem;
  letter-spacing: -0.02em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: ${(props) => props.theme.colors["-grayscale-50"]};
  border-radius: 86px;
  margin: 1rem 0 1.5rem 0;
  box-shadow: none;

  
  @media (hover: hover) {
    &:hover {
      box-shadow: inset 3px 4px 3px rgba(0, 0, 0, 0.3);
    }
  }

  &:active {
    filter: brightness(0.8);
  }

`;
