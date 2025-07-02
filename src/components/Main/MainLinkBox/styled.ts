import styled from "styled-components";

export const LinkBox = styled.div`
  display: flex;
  gap: 1.25rem 0.9rem;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 1.75rem auto 0;
`;

export const LinkTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
`;

export const LinkBottom = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

export const LinkBottomLeft = styled.div`
  flex: 1;
`;

export const LinkBottomRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const UserFeedbackButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.75rem;
  padding: 0 1rem;
  background: ${(props) => props.theme.colors["--Primary-blue-300"]};
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors["-grayscale-50"]};
`;

export const ArrowIcon = styled.img``;
