import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useClients } from "../../../hooks/useClients";
import { Button } from "../../Button";
import { ButtonActions } from "../../Button/ButtonActions";
import { Form } from "../../Form";
import {
  ModalContainer,
  ButtonClose,
  ModalTitle,
  ButtonActionsGroup,
} from "../styles";

interface ModalDeleteClientProps {
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalDeleteClient = ({
  setModalIsOpen,
}: ModalDeleteClientProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { deleteClient, setReloading } = useClients();

  async function handleDeleteClientSubmit(e: FormEvent) {
    setReloading(false);
    e.preventDefault();

    await deleteClient(Number(id));

    toast.success("Cliente deletado com sucesso.");

    setModalIsOpen(false);
    setReloading(true);
    navigate("/clients");
  }

  return (
    <ModalContainer>
      <Form onSubmit={handleDeleteClientSubmit}>
        <ModalTitle>Excluir cliente</ModalTitle>
        <h3 style={{ textAlign: "center" }}>
          Deseja realmente excluir o cliente selecionado?
        </h3>

        <ButtonActionsGroup>
          <ButtonActions
            width="250px"
            height="45px"
            onClick={() => {
              setModalIsOpen(false);
              navigate("/clients");
            }}
          >
            Cancelar
          </ButtonActions>
          <Button>Excluir</Button>
        </ButtonActionsGroup>
        <ButtonClose
          type="submit"
          onClick={() => {
            setModalIsOpen(false);
            navigate("/clients");
          }}
        >
          X
        </ButtonClose>
      </Form>
    </ModalContainer>
  );
};
