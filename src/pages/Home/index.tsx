import { useState } from "react";
import { Button } from "../../components/Button";
import { InputSearch } from "../../components/Input/InputSearch";
import { Layout } from "../../components/Layout";
import { AiFillPlusSquare } from "react-icons/ai";
import { ClientsCard } from "../../components/ClientsCard";
import { BoxClient, TitleHome } from "./styles";
import { ModalCreateClient } from "../../components/Modal/ModalCreateClient";

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Layout>
        <BoxClient>
          <InputSearch />
          <Button onClick={() => setModalIsOpen(true)}>
            <AiFillPlusSquare fontSize={24} color="white" />
            Novo cliente
          </Button>
        </BoxClient>
        <TitleHome>Clientes</TitleHome>
        <ClientsCard />
      </Layout>
      {modalIsOpen && <ModalCreateClient setModalIsOpen={setModalIsOpen} />}
    </>
  );
};

export default Home;
