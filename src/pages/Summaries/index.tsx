import { useCallback, useEffect, useState } from "react";
import { useClients } from "../../hooks/useClients";
import { useGroups } from "../../hooks/useGroups";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";
import { Select } from "../../components/Select";
import { api } from "../../services/api";
import { ClientsProps } from "../../types/clients";
import {
  SummariesContainer,
  BoxSummaries,
  BoxSelectGroup,
  BoxGroups,
} from "./styles";

const Summaries = () => {
  const { clients } = useClients();
  const { groups, loading, setLoading } = useGroups();
  const [selectGroup, setSelectGroup] = useState("");
  const [clientsSelectedGroup, setClientsSelectedGroup] = useState<
    ClientsProps[]
  >([]);

  const getGroupSelected = useCallback(async (id: string) => {
    setLoading(true);

    const response = await api.get(`/groups/${id}/clients`);

    if (response) {
      if (response.status === 200) {
        setClientsSelectedGroup(response.data);
      }
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    if (selectGroup) {
      getGroupSelected(selectGroup);
    }
  }, [selectGroup]);

  return (
    <>
      <SummariesContainer>
        <h2>Resumo de clientes e grupos cadastrados.</h2>
      </SummariesContainer>
      <Layout>
        <BoxSummaries>
          <h3>
            Total de clientes cadastrados: <span>{clients.length}</span>
          </h3>
          <h3>
            Total de grupos cadastrados: <span>{groups.length}</span>
          </h3>
        </BoxSummaries>
        <BoxSelectGroup>
          <Select
            labelText="Selecione um grupo"
            groups={groups}
            selectGroup={selectGroup}
            setSelectGroup={setSelectGroup}
          />
          {clientsSelectedGroup.length === 0 ? (
            <h3>Não há clientes cadastrados para esse grupo.</h3>
          ) : (
            <h3>
              Quantidade de clientes cadastrados no grupo:{" "}
              <span>
                {clientsSelectedGroup.length}{" "}
                {clientsSelectedGroup.length === 1 ? "cliente" : "clientes"}
              </span>
            </h3>
          )}
        </BoxSelectGroup>
        {loading ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Loading />
          </div>
        ) : (
          <BoxGroups>
            {clientsSelectedGroup &&
              clientsSelectedGroup.map(({ id, name, email }) => (
                <div key={id}>
                  <h3>{name}</h3>
                  <h5>{email}</h5>
                </div>
              ))}
          </BoxGroups>
        )}
      </Layout>
    </>
  );
};

export default Summaries;
