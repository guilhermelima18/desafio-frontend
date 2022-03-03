import { useClients } from "../../../hooks/useClients";
import { ButtonActions } from "../ButtonActions";
import { ButtonPaginationGroupContainer } from "./styles";

export const ButtonPaginationGroup = () => {
  const { getClients, parsedLinksPagination } = useClients();

  return (
    <ButtonPaginationGroupContainer>
      <ButtonActions
        width="200px"
        height="45px"
        onClick={() => getClients(parsedLinksPagination?.first)}
      >
        Anterior
      </ButtonActions>
      <ButtonActions
        width="200px"
        height="45px"
        onClick={() => getClients(parsedLinksPagination?.next)}
        disabled={parsedLinksPagination?.next === undefined}
      >
        Próxima
      </ButtonActions>
    </ButtonPaginationGroupContainer>
  );
};
