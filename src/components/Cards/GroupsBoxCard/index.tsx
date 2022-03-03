import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGroups } from "../../../hooks/useGroups";
import { FiEdit } from "react-icons/fi";
import { AiFillPlusSquare } from "react-icons/ai";
import { ButtonActions } from "../../Button/ButtonActions";
import { EmptyClients } from "../../EmptyClients";
import { InputSearch } from "../../Input/InputSearch";
import { Button } from "../../Button";
import { Layout } from "../../Layout";
import { BoxLinkPages } from "../../BoxLinkPages";
import { ModalCreateGroup } from "../../Modal/ModalCreateGroup";
import { TextToUpper } from "../../../utils/TextToUpper";
import {
  BoxContainer,
  TableContainer,
  BoxActions,
  BoxClient,
  TitleHome,
} from "../styles";
import { Loading } from "../../Loading";
import { ModalUpdateGroup } from "../../Modal/ModalUpdateGroup";

export const GroupsBoxCard = () => {
  const navigate = useNavigate();
  const { groups, getGroups, searchGroup, loading } = useGroups();
  const [modalCreateGroupIsOpen, setModalCreateGroupIsOpen] = useState(false);
  const [modalUpdateGroupIsOpen, setModalUpdateGroupIsOpen] = useState(false);
  const [inputSearchGroup, setInputSearchCustomer] = useState("");

  async function handleRefreshList() {
    await getGroups();
  }

  async function handleSearchGroups(event: any) {
    if (event.key === "Enter") {
      const capitalText = TextToUpper(inputSearchGroup);
      await searchGroup(capitalText);

      setInputSearchCustomer("");
    }
  }

  return (
    <>
      <BoxLinkPages isPageHome={false} />
      <Layout>
        <BoxClient>
          <InputSearch
            placeholderText="Busque pela descrição do grupo"
            value={inputSearchGroup}
            onChange={(e: any) => setInputSearchCustomer(e.target.value)}
            onKeyPress={handleSearchGroups}
          />
          <Button onClick={() => setModalCreateGroupIsOpen(true)}>
            <AiFillPlusSquare fontSize={24} color="white" />
            Cadastrar grupo
          </Button>
        </BoxClient>
        <TitleHome>
          Grupos
          <ButtonActions
            width="150px"
            height="35px"
            onClick={handleRefreshList}
          >
            Recarregar a lista
          </ButtonActions>
        </TitleHome>

        <BoxContainer style={{ overflowX: "scroll" }}>
          {!loading && groups.length === 0 && (
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
            groups.length > 0 && (
              <TableContainer>
                <thead>
                  <tr>
                    <th>Código</th>
                    <th>Descrição</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {groups.map(({ id, description }) => {
                    return (
                      <tr key={id}>
                        <td>{id}</td>
                        <td style={{ width: "100%" }}>{description}</td>
                        <td>
                          <BoxActions>
                            <ButtonActions
                              width="32px"
                              height="32px"
                              onClick={() => {
                                setModalUpdateGroupIsOpen(true);
                                navigate(`/groups/edit/${id}`);
                              }}
                            >
                              <FiEdit fontSize={20} />
                            </ButtonActions>
                          </BoxActions>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </TableContainer>
            )
          )}
          {modalCreateGroupIsOpen && (
            <ModalCreateGroup setModalIsOpen={setModalCreateGroupIsOpen} />
          )}
          {modalUpdateGroupIsOpen && (
            <ModalUpdateGroup setModalIsOpen={setModalUpdateGroupIsOpen} />
          )}
        </BoxContainer>
      </Layout>
    </>
  );
};
