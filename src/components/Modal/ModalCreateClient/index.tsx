import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useClients } from "../../../hooks/useClients";
import { useGroups } from "../../../hooks/useGroups";
import { Button } from "../../Button";
import { Form } from "../../Form";
import { InputGroup } from "../../Input/InputGroup";
import { Loading } from "../../Loading";
import { Select } from "../../Select";
import { ModalContainer, FormGroup, ButtonClose, ModalTitle } from "../styles";

interface ModalCreateClientProps {
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalCreateClient = ({
  setModalIsOpen,
}: ModalCreateClientProps) => {
  const navigate = useNavigate();
  const { createClient, loading, setReloading } = useClients();
  const { groups } = useGroups();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectGroup, setSelectGroup] = useState("");
  const [error, setError] = useState("");

  async function handleCreateClient(e: FormEvent) {
    setReloading(false);
    e.preventDefault();

    const params = {
      name,
      email,
      phone,
      groupId: selectGroup !== "" ? Number(selectGroup) : undefined,
    };

    if (name.length > 0 && email.length > 0 && phone.length > 0) {
      await createClient(params);

      toast.success("Cliente cadastrado com sucesso.");

      setModalIsOpen(false);
      setReloading(true);
      navigate("/clients");
    } else {
      setError("Preencha os campos corretamente.");
      toast.info("Todos os campos são obrigatórios.");
    }
  }

  return (
    <ModalContainer>
      <Form onSubmit={handleCreateClient}>
        <ModalTitle>Cadastro de clientes</ModalTitle>
        <FormGroup>
          <InputGroup
            labelText="Nome"
            inputName="name"
            inputType="text"
            inputPlaceholder="Nome completo"
            error={error}
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
          <InputGroup
            labelText="Telefone"
            inputName="phone"
            inputType="text"
            inputPlaceholder="(XX)XXXX-XXXX"
            error={error}
            value={phone}
            onChange={(e: any) => setPhone(e.target.value)}
          />
        </FormGroup>
        <InputGroup
          labelText="E-mail"
          inputName="email"
          inputType="email"
          inputPlaceholder="exemplo@exemplo.com"
          error={error}
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Select
          labelText="Selecione um grupo"
          groups={groups}
          selectGroup={selectGroup}
          setSelectGroup={setSelectGroup}
        />
        <Button type="submit" disabled={loading}>
          {loading ? (
            <Loading width="30" height="30" />
          ) : (
            "Cadastrar novo cliente"
          )}
        </Button>
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
