import emptyClientIcon from "../../assets/icons/empty-clients.svg";
import { EmptyClientsContainer } from "./styles";

export const EmptyClients = () => {
  return (
    <EmptyClientsContainer>
      <img src={emptyClientIcon} alt="Ícone clientes" />
      <h2>Nenhum cliente encontrado.</h2>
      <span>
        Não encontramos nenhum cliente.
        <br />
        Cadastre um novo cliente e comece a gerenciá-los.
      </span>
    </EmptyClientsContainer>
  );
};
