import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGroups } from "../../../hooks/useGroups";
import { toast } from "react-toastify";
import { Button } from "../../Button";
import { Form } from "../../Form";
import { InputGroup } from "../../Input/InputGroup";
import { ModalContainer, ButtonClose, ModalTitle } from "../styles";
import { Loading } from "../../Loading";

interface ModalCreateClientProps {
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalCreateGroup = ({
  setModalIsOpen,
}: ModalCreateClientProps) => {
  const navigate = useNavigate();
  const { createGroup, loading, setReloading } = useGroups();
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  async function handleCreateGroupSubmit(e: FormEvent) {
    setReloading(false);
    e.preventDefault();

    const params = {
      description,
    };

    if (description.length > 0) {
      await createGroup(params);

      toast.success("Grupo cadastrado com sucesso.");

      setModalIsOpen(false);
      setReloading(true);
      navigate("/groups");
    } else {
      setError("Preencha o campo corretamente.");
      toast.info("Campo descrição é obrigatório.");
    }
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
          error={error}
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
        />
        <Button type="submit" disabled={loading} marginTop="2rem">
          {loading ? (
            <Loading width="30" height="30" />
          ) : (
            "Cadastrar novo grupo"
          )}
        </Button>
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
