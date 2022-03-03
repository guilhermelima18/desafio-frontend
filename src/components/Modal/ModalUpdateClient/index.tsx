import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useClients } from "../../../hooks/useClients";
import { api } from "../../../services/api";
import { Button } from "../../Button";
import { Form } from "../../Form";
import { InputGroup } from "../../Input/InputGroup";
import { Loading } from "../../Loading";
import { ModalContainer, FormGroup, ButtonClose } from "../styles";

interface ModalUpdateClientProps {
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalUpdateClient = ({
  setModalIsOpen,
}: ModalUpdateClientProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, updatedClient, setReloading } = useClients();
  const [updateClient, setUpdateClient] = useState({
    name: "",
    email: "",
    phone: "",
    groupId: "",
  });

  async function getClient() {
    const response = await api.get(`/clients/${id}`);

    if (response) {
      setUpdateClient({
        name: response.data.name,
        email: response.data.email,
        phone: response.data.phone,
        groupId: response.data.groupId,
      });
    }
  }

  useEffect(() => {
    if (id) {
      getClient();
    }
  }, []);

  function handleUpdateClient(e: any) {
    setUpdateClient({ ...updateClient, [e.target.name]: e.target.value });
  }

  async function handleUpdateSubmit(e: FormEvent) {
    setReloading(false);
    e.preventDefault();

    const params = {
      id: Number(id),
      ...updateClient,
    };

    await updatedClient(params);

    toast.success("Cliente atualizado com sucesso.");

    setModalIsOpen(false);
    setReloading(true);
    navigate("/clients");
  }

  return (
    <ModalContainer>
      <Form onSubmit={handleUpdateSubmit}>
        <FormGroup>
          <InputGroup
            labelText="Nome"
            inputName="name"
            inputType="text"
            inputPlaceholder="Nome completo"
            value={updateClient.name}
            onChange={(e) => handleUpdateClient(e)}
          />
          <InputGroup
            labelText="Telefone"
            inputName="phone"
            inputType="text"
            inputPlaceholder="(XX)XXXX-XXXX"
            value={updateClient.phone}
            onChange={(e) => handleUpdateClient(e)}
          />
        </FormGroup>
        <InputGroup
          labelText="E-mail"
          inputName="email"
          inputType="email"
          inputPlaceholder="exemplo@exemplo.com"
          value={updateClient.email}
          onChange={(e) => handleUpdateClient(e)}
        />
        <Button type="submit" disabled={loading} marginTop="2rem">
          {loading ? <Loading width="30" height="30" /> : "Atualizar cliente"}
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
