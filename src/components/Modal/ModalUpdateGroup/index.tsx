import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGroups } from "../../../hooks/useGroups";
import { api } from "../../../services/api";
import { Button } from "../../Button";
import { Form } from "../../Form";
import { InputGroup } from "../../Input/InputGroup";
import { Loading } from "../../Loading";
import { ModalContainer, FormGroup, ButtonClose } from "../styles";

interface ModalUpdateGroupProps {
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalUpdateGroup = ({ setModalIsOpen }: ModalUpdateGroupProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, updateGroup, setReloading } = useGroups();
  const [inputUpdateGroup, setInputUpdateGroup] = useState({ description: "" });

  async function getGroup() {
    const response = await api.get(`/groups/${id}`);

    if (response) {
      setInputUpdateGroup({
        description: response.data.description,
      });
    }
  }

  useEffect(() => {
    if (id) {
      getGroup();
    }
  }, []);

  function handleUpdateGroup(e: any) {
    setInputUpdateGroup({
      ...inputUpdateGroup,
      [e.target.name]: e.target.value,
    });
  }

  async function handleUpdateSubmit(e: FormEvent) {
    setReloading(false);
    e.preventDefault();

    const params = {
      id: Number(id),
      ...inputUpdateGroup,
    };

    await updateGroup(params);

    toast.success("Grupo atualizado com sucesso.");

    setModalIsOpen(false);
    setReloading(true);
    navigate("/groups");
  }

  return (
    <ModalContainer>
      <Form onSubmit={handleUpdateSubmit}>
        <InputGroup
          labelText="Descrição"
          inputName="description"
          inputType="text"
          inputPlaceholder="ex: Tecnologia"
          value={inputUpdateGroup.description}
          onChange={(e) => handleUpdateGroup(e)}
        />
        <Button type="submit" disabled={loading} marginTop="2rem">
          {loading ? <Loading width="30" height="30" /> : "Atualizar grupo"}
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
