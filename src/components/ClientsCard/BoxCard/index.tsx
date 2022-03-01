import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonActions } from "../../Button/ButtonActions";
import { FiEdit } from "react-icons/fi";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { ModalUpdateClient } from "../../Modal/ModalUpdateClient";
import { BoxContainer, TableContainer, BoxActions } from "./styles";
import { ClientsProps } from "../../../types/clients";

type ClientProps = {
  clients: ClientsProps[];
};

export const BoxCard = ({ clients }: ClientProps) => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <BoxContainer>
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
          {clients.map(({ id, name, email, phone }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>Tecnologia</td>
              <td>
                <BoxActions>
                  <ButtonActions
                    width="32px"
                    height="32px"
                    onClick={() => {
                      setModalIsOpen(true);
                      navigate(`/edit-client/${id}`);
                    }}
                  >
                    <FiEdit fontSize={20} />
                  </ButtonActions>
                  <ButtonActions
                    width="32px"
                    height="32px"
                    onClick={() => {
                      setModalIsOpen(true);
                      navigate(`/delete-client/${id}`);
                    }}
                  >
                    <IoMdRemoveCircleOutline fontSize={20} />
                  </ButtonActions>
                </BoxActions>
              </td>
            </tr>
          ))}
        </tbody>
      </TableContainer>
      {modalIsOpen && <ModalUpdateClient setModalIsOpen={setModalIsOpen} />}
    </BoxContainer>
  );
};
