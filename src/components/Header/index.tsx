import { Link } from "react-router-dom";
import { HeaderContainer, NavContainer, BoxLogo, BoxMenu } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <BoxLogo>
          <h1>Desafio Frontend</h1>
        </BoxLogo>
        <BoxMenu>
          <Link to="/">Início</Link>
          <Link to="/">Resumos</Link>
        </BoxMenu>
      </NavContainer>
    </HeaderContainer>
  );
};
