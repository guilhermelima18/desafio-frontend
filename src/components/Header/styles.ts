import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--primary-color);
  width: 100%;
  height: 10vh;
  padding: 0 1rem;
`;

export const NavContainer = styled.nav`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoxLogo = styled.div`
  width: 20%;
  display: flex;

  h1 {
    color: white;
  }

  @media (max-width: 860px) {
    h1 {
      font-size: 1rem;
    }
  }
`;

export const BoxMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    color: white;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 0;
  }
`;
