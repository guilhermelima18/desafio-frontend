import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: var(--secondary-color);
  width: 100%;
  max-width: 260px;
  height: 45px;
  color: white;
  border: 0;
  outline: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: 500ms;

  &:hover {
    background-color: var(--secondary-color-hover);
  }
`;
