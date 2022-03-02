import styled from "styled-components";

export const BoxPages = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 50px;
  margin: 4rem auto 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  padding: 0 0 0 1rem;

  a {
    background-color: var(--primary-color);
    width: 220px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    color: white;
    font-weight: bold;
    transition: 400ms;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 500px) {
    & {
      padding: 0 1rem;
    }
  }
`;
