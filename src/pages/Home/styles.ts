import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: calc(100vh - 10vh);
  display: flex;
  justify-content: center;

  section {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    img {
      width: 100%;
      height: 100%;
      opacity: 0.9;
      border-radius: 7px;
    }
  }

  main {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;

    h2 {
      text-align: center;
    }
  }

  @media (max-width: 880px) {
    & {
      height: auto;
      flex-direction: column;

      section {
        width: 100%;
      }

      main {
        width: 100%;
        margin: 2rem 0;
      }
    }
  }
`;
