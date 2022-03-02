import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGroups } from "../../../hooks/useGroups";
import { FiEdit } from "react-icons/fi";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { ButtonActions } from "../../Button/ButtonActions";
import { ModalUpdateClient } from "../../Modal/ModalUpdateClient";
import { ModalDeleteClient } from "../../Modal/ModalDeleteClient";
import { EmptyClients } from "../../EmptyClients";
import { ClientsProps } from "../../../types/clients";
import { BoxContainer, TableContainer, BoxActions } from "./styles";

type ClientProps = {
  clients: ClientsProps[];
};

export const BoxCard = ({ clients }: ClientProps) => {
  const navigate = useNavigate();
  const { groups } = useGroups();
  const [modalUpdateClientIsOpen, setModalUpdateClientIsOpen] = useState(false);
  const [modalDeleteClientIsOpen, setModalDeleteClientIsOpen] = useState(false);

  const newArray = [...clients];

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
    <BoxContainer style={{ overflowX: "scroll" }}>
      {clients.length === 0 && <EmptyClients />}
      {clients.length > 0 && (
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
                              navigate(`/edit-client/${id}`);
                            }}
                          >
                            <FiEdit fontSize={20} />
                          </ButtonActions>
                          <ButtonActions
                            width="32px"
                            height="32px"
                            onClick={() => {
                              setModalDeleteClientIsOpen(true);
                              navigate(`/delete-client/${id}`);
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
      )}
      {modalUpdateClientIsOpen && (
        <ModalUpdateClient setModalIsOpen={setModalUpdateClientIsOpen} />
      )}
      {modalDeleteClientIsOpen && (
        <ModalDeleteClient setModalIsOpen={setModalDeleteClientIsOpen} />
      )}
    </BoxContainer>
  );
};
