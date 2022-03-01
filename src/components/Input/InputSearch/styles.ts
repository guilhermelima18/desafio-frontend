import styled from "styled-components";

export const InputContainer = styled.span`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgba(200, 200, 200, 0.5);
  padding: 0 1rem;

  input {
    border: 0;
    width: 100%;
    height: 100%;
    outline: none;
    margin-left: 1rem;
  }

  &:focus-within {
    border: 2px solid var(--primary-color);
  }
`;
