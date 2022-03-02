import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGroups } from "../../../hooks/useGroups";
import { toast } from "react-toastify";
import { Button } from "../../Button";
import { Form } from "../../Form";
import { InputGroup } from "../../Input/InputGroup";
import { ModalContainer, ButtonClose, ModalTitle } from "../styles";

interface ModalCreateClientProps {
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalCreateGroup = ({
  setModalIsOpen,
}: ModalCreateClientProps) => {
  const navigate = useNavigate();
  const { createGroup, setReloading } = useGroups();
  const [description, setDescription] = useState("");

  async function handleCreateGroupSubmit(e: FormEvent) {
    setReloading(false);
    e.preventDefault();

    const params = {
      description,
    };

    await createGroup(params);

    toast.success("Grupo cadastrado com sucesso.");

    setModalIsOpen(false);
    setReloading(true);
    navigate("/groups");
  }

  return (
    <ModalContainer>
      <Form onSubmit={handleCreateGroupSubmit}>
        <ModalTitle>Cadastro de grupos</ModalTitle>
        <InputGroup
          labelText="Descrição"
          inputName="description"
          inputType="text"
          inputPlaceholder="Descrição do grupo"
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
        />
        <Button marginTop="2rem">Cadastrar novo grupo</Button>
        <ButtonClose
          type="submit"
          onClick={() => {
            setModalIsOpen(false);
            navigate("/groups");
          }}
        >
          X
        </ButtonClose>
      </Form>
    </ModalContainer>
  );
};
