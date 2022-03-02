import { useClients } from "../../hooks/useClients";
import { ButtonActions } from "../Button/ButtonActions";
import { Loading } from "../Loading";
import { BoxCard } from "./BoxCard";
import { ClientsCardContainer, BoxPagination } from "./styles";

export const ClientsCard = () => {
  const { clients, loading, getClients, parsedLinksPagination } = useClients();

  return (
    <ClientsCardContainer>
      {loading ? <Loading /> : <BoxCard clients={clients} />}
      {!loading && clients.length > 0 && (
        <BoxPagination>
          <ButtonActions
            width="100px"
            height="35px"
            onClick={() => {
              getClients(parsedLinksPagination?.first);
            }}
          >
            Anterior
          </ButtonActions>
          <ButtonActions
            width="100px"
            height="35px"
            onClick={() => {
              getClients(
                parsedLinksPagination?.next === undefined
                  ? parsedLinksPagination?.first
                  : parsedLinksPagination?.next
              );
            }}
          >
            Próxima
          </ButtonActions>
        </BoxPagination>
      )}
    </ClientsCardContainer>
  );
};
