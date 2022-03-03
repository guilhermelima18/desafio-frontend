import { Dispatch, SetStateAction } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MobileContainer } from "./styles";

type MobileMenuProps = {
  pathname: string;
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
};

export const MobileMenu = ({ pathname, setMobileMenu }: MobileMenuProps) => {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div>
        <button
          onClick={() => {
            setMobileMenu(false);
            navigate(pathname);
          }}
        >
          X
        </button>
        <Link to="/">Início</Link>

        <Link to="/summaries">Resumos</Link>
      </div>
    </MobileContainer>
  );
};
