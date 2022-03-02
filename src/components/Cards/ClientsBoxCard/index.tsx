import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useClients } from "../../../hooks/useClients";
import { useGroups } from "../../../hooks/useGroups";
import { FiEdit } from "react-icons/fi";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { AiFillPlusSquare } from "react-icons/ai";
import { ButtonActions } from "../../Button/ButtonActions";
import { ModalUpdateClient } from "../../Modal/ModalUpdateClient";
import { ModalDeleteClient } from "../../Modal/ModalDeleteClient";
import { ModalCreateClient } from "../../Modal/ModalCreateClient";
import { Layout } from "../../Layout";
import { BoxLinkPages } from "../../BoxLinkPages";
import { Loading } from "../../Loading";
import { EmptyClients } from "../../EmptyClients";
import { InputSearch } from "../../Input/InputSearch";
import { Button } from "../../Button";
import { TextToUpper } from "../../../utils/TextToUpper";
import {
  BoxContainer,
  TableContainer,
  BoxActions,
  BoxClient,
  TitleHome,
} from "../styles";

export const ClientsBoxCard = () => {
  const navigate = useNavigate();
  const { clients, getClients, searchClient, loading } = useClients();
  const { groups } = useGroups();
  const [modalClientIsOpen, setModalClientIsOpen] = useState(false);
  const [modalUpdateClientIsOpen, setModalUpdateClientIsOpen] = useState(false);
  const [modalDeleteClientIsOpen, setModalDeleteClientIsOpen] = useState(false);
  const [searchCustomer, setSearchCustomer] = useState("");

  console.log(clients);

  async function handleRefreshList() {
    await getClients();
  }

  async function handleSearchClients(event: any) {
    if (event.key === "Enter") {
      const capitalText = TextToUpper(searchCustomer);
      await searchClient(capitalText);

      setSearchCustomer("");
    }
  }

  let newArray: any = [];

  if (clients) {
    newArray = [...clients];
  }

  const groupIds = groups.map((item) => {
    return item.id;
  });

  let groupingClientsAndGroups = [];

  for (var i = 0; i <= newArray.length; i++) {
    for (var j = 0; j <= groupIds.length; j++) {
      if (newArray[i]) {
        if (newArray[i].groupId === groupIds[j]) {
          const newObj = {
            ...newArray[i],
            group: {
              id: groups[j].id,
              description: groups[j].description,
            },
          };

          groupingClientsAndGroups.push(newObj);
        }
      }
    }
  }

  return (
    <>
      <BoxLinkPages isPageHome={false} />
      <Layout>
        <BoxClient>
          <InputSearch
            placeholderText="Busque pelo nome do cliente"
            value={searchCustomer}
            onChange={(e: any) => setSearchCustomer(e.target.value)}
            onKeyPress={handleSearchClients}
          />
          <Button onClick={() => setModalClientIsOpen(true)}>
            <AiFillPlusSquare fontSize={24} color="white" />
            Cadastrar cliente
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

        <BoxContainer style={{ overflowX: "scroll" }}>
          {!loading && clients.length === 0 && (
            <div style={{ width: "100%" }}>
              <EmptyClients />
            </div>
          )}
          {loading ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Loading />
            </div>
          ) : (
            clients.length > 0 && (
              <TableContainer>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <th>Grupo</th>
                    <th>Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {groupingClientsAndGroups &&
                    groupingClientsAndGroups.map(
                      ({ id, name, email, phone, group }) => {
                        return (
                          <tr key={id}>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{phone}</td>
                            <td>{group.description}</td>
                            <td>
                              <BoxActions>
                                <ButtonActions
                                  width="32px"
                                  height="32px"
                                  onClick={() => {
                                    setModalUpdateClientIsOpen(true);
                                    navigate(`/clients/edit/${id}`);
                                  }}
                                >
                                  <FiEdit fontSize={20} />
                                </ButtonActions>
                                <ButtonActions
                                  width="32px"
                                  height="32px"
                                  onClick={() => {
                                    setModalDeleteClientIsOpen(true);
                                    navigate(`/clients/delete/${id}`);
                                  }}
                                >
                                  <IoMdRemoveCircleOutline fontSize={20} />
                                </ButtonActions>
                              </BoxActions>
                            </td>
                          </tr>
                        );
                      }
                    )}
                </tbody>
              </TableContainer>
            )
          )}
          {modalClientIsOpen && (
            <ModalCreateClient setModalIsOpen={setModalClientIsOpen} />
          )}
          {modalUpdateClientIsOpen && (
            <ModalUpdateClient setModalIsOpen={setModalUpdateClientIsOpen} />
          )}
          {modalDeleteClientIsOpen && (
            <ModalDeleteClient setModalIsOpen={setModalDeleteClientIsOpen} />
          )}
        </BoxContainer>
      </Layout>
    </>
  );
};
