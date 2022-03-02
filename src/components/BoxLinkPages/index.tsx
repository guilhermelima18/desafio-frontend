import { Link } from "react-router-dom";
import { BoxPages } from "./styles";

type BoxLinkPagesProps = {
  isPageHome: boolean;
};

export const BoxLinkPages = ({ isPageHome = false }: BoxLinkPagesProps) => {
  return (
    <BoxPages
      style={
        isPageHome
          ? { height: "100px", flexDirection: "column" }
          : { flexDirection: "row" }
      }
    >
      <Link
        style={isPageHome ? { height: "50px" } : { height: "100%" }}
        to="/clients"
      >
        Clientes
      </Link>
      <Link
        style={isPageHome ? { height: "50px" } : { height: "100%" }}
        to="/groups"
      >
        Grupos
      </Link>
    </BoxPages>
  );
};
