import styled from "styled-components";

export const BoxClient = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const TitleHome = styled.h1`
  margin: 2rem 0;
  font-size: 1.8rem;
  position: relative;
  padding: 0.5rem 0;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    border-bottom: 2px solid black;
  }
`;
