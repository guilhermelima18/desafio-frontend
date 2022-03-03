import { Link, useLocation } from "react-router-dom";
import { HeaderContainer, NavContainer, BoxLogo, BoxMenu } from "./styles";

export const Header = () => {
  const { pathname } = useLocation();

  const linkPathnameStyled = {
    padding: "0.5rem 0",
    borderBottom: "2px solid white",
  };

  return (
    <HeaderContainer>
      <NavContainer>
        <BoxLogo>
          <h1>Desafio Frontend</h1>
        </BoxLogo>
        <BoxMenu>
          <span
            style={pathname === "/" ? linkPathnameStyled : { padding: "0" }}
          >
            <Link to="/">Início</Link>
          </span>
          <span
            style={
              pathname === "/summaries" ? linkPathnameStyled : { padding: "0" }
            }
          >
            <Link to="/summaries">Resumos</Link>
          </span>
        </BoxMenu>
      </NavContainer>
    </HeaderContainer>
  );
};
