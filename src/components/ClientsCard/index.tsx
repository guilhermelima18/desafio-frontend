import { useClients } from "../../hooks/useClients";
import { ButtonActions } from "../Button/ButtonActions";
import { Loading } from "../Loading";
import { BoxCard } from "./BoxCard";
import { ClientsCardContainer, BoxPagination } from "./styles";

export const ClientsCard = () => {
  const { clients, loading } = useClients();

  return (
    <ClientsCardContainer>
      {loading ? <Loading /> : <BoxCard clients={clients} />}
      {!loading && (
        <BoxPagination>
          <ButtonActions width="100px" height="35px">
            Anterior
          </ButtonActions>
          <ButtonActions width="100px" height="35px">
            Próxima
          </ButtonActions>
        </BoxPagination>
      )}
    </ClientsCardContainer>
  );
};
