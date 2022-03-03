import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { MobileMenu } from "./MobileMenu";
import {
  HeaderContainer,
  NavContainer,
  BoxLogo,
  BoxMenu,
  MobileButton,
} from "./styles";

export const Header = () => {
  const mobile = useMediaQuery("(max-width: 600px)");
  const { pathname } = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (pathname) {
      setMobileMenu(false);
    }
  }, [pathname]);

  const linkPathnameStyled = {
    padding: "0.5rem 0",
    borderBottom: "2px solid white",
  };

  return (
    <>
      <HeaderContainer>
        <NavContainer>
          <BoxLogo>
            <h1>Desafio Frontend</h1>
          </BoxLogo>
          {mobile ? (
            <MobileButton onClick={() => setMobileMenu(true)}></MobileButton>
          ) : (
            <BoxMenu>
              <span
                style={pathname === "/" ? linkPathnameStyled : { padding: "0" }}
              >
                <Link to="/">Início</Link>
              </span>
              <span
                style={
                  pathname === "/summaries"
                    ? linkPathnameStyled
                    : { padding: "0" }
                }
              >
                <Link to="/summaries">Resumos</Link>
              </span>
            </BoxMenu>
          )}
        </NavContainer>
      </HeaderContainer>
      {mobileMenu && (
        <MobileMenu pathname={pathname} setMobileMenu={setMobileMenu} />
      )}
    </>
  );
};
