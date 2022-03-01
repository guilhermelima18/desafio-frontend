import styled from "styled-components";

export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 1rem 0;
  margin-bottom: 2rem;

  select {
    width: 100%;
    height: 45px;
    padding: 0 1rem;
    border-radius: 7px;
    border: 1px solid gray;
    outline: none;
  }
`;
