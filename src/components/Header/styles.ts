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
  position: relative;
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

export const MobileButton = styled.button`
  background-color: #eee;
  border-radius: 0.2rem;
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;

  &::after {
    content: "";
    background: currentColor;
    width: 1.2rem;
    height: 2px;
    display: block;
    border-radius: 2px;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
  }

  &:focus,
  &:hover {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px var(--secondary-color);
    border-color: #fb1;
    color: var(--secondary-color);
  }
`;
