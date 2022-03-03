import styled from "styled-components";

export const SummariesContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1rem;
`;

export const BoxSummaries = styled.section`
  width: 100%;
  padding: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 20px;

    span {
      font-weight: bold;
      font-size: 1.5rem;
    }
  }
`;

export const BoxSelectGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  h3 {
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 20px;

    span {
      font-weight: bold;
      font-size: 1.5rem;
    }

    @media (max-width: 600px) {
      & {
        flex-direction: column;
        text-align: center;
      }
    }
  }
`;

export const BoxGroups = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;

  div {
    width: 95%;
    margin: 1rem 0;
    border: 1px solid rgba(200, 200, 200, 0.5);
    padding: 2rem;
  }

  @media (max-width: 820px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;
