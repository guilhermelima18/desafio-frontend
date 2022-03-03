import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 1rem 0;

  input {
    width: 100%;
    height: 45px;
    padding: 0 1rem;
    border-radius: 7px;
    border: 1px solid gray;
    outline: none;

    &:focus {
      border: 2px solid var(--primary-color);
    }
  }

  p {
    font-size: 0.8rem;
    color: red;
  }
`;
