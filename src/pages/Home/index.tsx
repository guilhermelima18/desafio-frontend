import { useLocation } from "react-router-dom";
import { BoxLinkPages } from "../../components/BoxLinkPages";
import { ClientsBoxCard } from "../../components/Cards/ClientsBoxCard";
import { GroupsBoxCard } from "../../components/Cards/GroupsBoxCard";
import backgroundImage from "../../assets/background-image.svg";
import { HomeContainer } from "./styles";

const Home = () => {
  const { pathname } = useLocation();

  return (
    <HomeContainer>
      <section>
        <img src={backgroundImage} alt="Imagem de fundo" />
      </section>
      <main>
        <h2>
          Gerencie seus clientes e grupos de
          <br />
          forma simples, rápida e fácil.
        </h2>
        <BoxLinkPages isPageHome={true} />
      </main>
      {pathname === "/clients" && <ClientsBoxCard />}
      {pathname === "/groups" && <GroupsBoxCard />}
    </HomeContainer>
  );
};

export default Home;
