import styled from "styled-components";

export const CardBox = styled.div`
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translateX(-50%);
`;

export const CloseButton = styled.button`
  width: 20rem;
  position: absolute;
  padding: 1rem 2rem;
  left: 50%;
  transform: translateX(-50%);
  bottom: 22.5%;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors["--Primary-blue-300"]};
  font-size: 1.25rem;
  color: #fff;
  font-weight: 800;
  letter-spacing: 3px;

  &:hover {
    transition: 0.75s;
    background-color: ${(props) => props.theme.colors["--Primary-blue-700"]};
  }
`;
