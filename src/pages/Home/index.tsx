import { useState } from "react";
import { useClients } from "../../hooks/useClients";
import { Button } from "../../components/Button";
import { InputSearch } from "../../components/Input/InputSearch";
import { Layout } from "../../components/Layout";
import { AiFillPlusSquare } from "react-icons/ai";
import { ClientsCard } from "../../components/ClientsCard";
import { BoxClient, TitleHome } from "./styles";
import { ModalCreateClient } from "../../components/Modal/ModalCreateClient";
import { ModalCreateGroup } from "../../components/Modal/ModalCreateGroup";
import { TextToUpper } from "../../utils/TextToUpper";
import { ButtonActions } from "../../components/Button/ButtonActions";

const Home = () => {
  const { searchClient, getClients } = useClients();
  const [modalClientIsOpen, setModalClientIsOpen] = useState(false);
  const [modalGroupIsOpen, setModalGroupIsOpen] = useState(false);
  const [searchCustomer, setSearchCustomer] = useState("");

  async function handleRefreshList() {
    await getClients();
  }

  async function handleSearchClients(event: any) {
    if (event.key === "Enter") {
      const capitalText = TextToUpper(searchCustomer);
      console.log(capitalText);
      await searchClient(capitalText);

      setSearchCustomer("");
    }
  }

  return (
    <>
      <Layout>
        <BoxClient>
          <InputSearch
            value={searchCustomer}
            onChange={(e: any) => setSearchCustomer(e.target.value)}
            onKeyPress={handleSearchClients}
          />
          <Button onClick={() => setModalClientIsOpen(true)}>
            <AiFillPlusSquare fontSize={24} color="white" />
            Cadastrar cliente
          </Button>
          <Button onClick={() => setModalGroupIsOpen(true)}>
            <AiFillPlusSquare fontSize={24} color="white" />
            Cadastrar grupo
          </Button>
        </BoxClient>
        <TitleHome>
          Clientes
          <ButtonActions
            width="150px"
            height="35px"
            onClick={handleRefreshList}
          >
            Recarregar a lista
          </ButtonActions>
        </TitleHome>
        <ClientsCard />
      </Layout>
      {modalClientIsOpen && (
        <ModalCreateClient setModalIsOpen={setModalClientIsOpen} />
      )}
      {modalGroupIsOpen && (
        <ModalCreateGroup setModalIsOpen={setModalGroupIsOpen} />
      )}
    </>
  );
};

export default Home;
