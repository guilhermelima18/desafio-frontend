import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { parsedLinksHeader } from "../utils/ParsedLinksPagination";
import {
  ClientsProps,
  CreateClientProps,
  UpdateClientProps,
} from "../types/clients";

type ClientsDataProviderProps = {
  children: ReactNode;
};

type ClientsDataContextProps = {
  clients: ClientsProps[];
  loading: boolean;
  reloading: boolean;
  setReloading: Dispatch<SetStateAction<boolean>>;
  getClients: (linkPage?: string) => Promise<void>;
  searchClient: (clientName: string) => Promise<void>;
  createClient: (client: CreateClientProps) => Promise<void>;
  updatedClient: (client: UpdateClientProps) => Promise<void>;
  deleteClient: (clientId: number) => Promise<void>;
  parsedLinksPagination?: ParsedLinksPaginationProps;
};

type ParsedLinksPaginationProps = {
  next: string;
  first: string;
  last: string;
};

export const ClientsDataContext = createContext({} as ClientsDataContextProps);

export function ClientsDataProvider({ children }: ClientsDataProviderProps) {
  const [clients, setClients] = useState<ClientsProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [reloading, setReloading] = useState(false);
  const [parsedLinksPagination, setParsedLinksPagination] =
    useState<ParsedLinksPaginationProps>();

  useEffect(() => {
    getClients();
  }, [reloading]);

  async function getClients(linkPage?: string) {
    setLoading(true);

    let response;

    if (linkPage) {
      response = await api.get(linkPage);
    } else {
      response = await api.get("/clients?_page=1&_limit=5");
    }

    if (response) {
      if (response.headers.link) {
        const { link } = response.headers;
        const links = parsedLinksHeader(link);

        setParsedLinksPagination({
          first: links.first,
          next: links.next,
          last: links.last,
        });
      }
      if (response.status === 200) {
        setClients(response.data);
      }
    }

    setLoading(false);
  }

  async function searchClient(clientName: string) {
    setLoading(true);

    const response = await api.get(`/clients?name_like=${clientName}`);

    if (response) {
      if (response.status === 200) {
        setClients(response.data);
      }
    }

    setLoading(false);
  }

  async function createClient(client: CreateClientProps) {
    try {
      setLoading(true);
      await api.post("/clients", client);
    } catch (error) {
      toast.error("Erro ao cadastrar o cliente");
    } finally {
      setLoading(false);
    }
  }

  async function updatedClient(client: UpdateClientProps) {
    try {
      setLoading(true);
      await api.put(`/clients/${client.id}`, client);
    } catch (error) {
      toast.error("Erro ao atualizar um cliente.");
    } finally {
      setLoading(false);
    }
  }

  async function deleteClient(clientId: number) {
    try {
      setLoading(true);
      await api.delete(`/clients/${clientId}`);
    } catch (error) {
      toast.error("Erro ao deletar um cliente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <ClientsDataContext.Provider
      value={{
        clients,
        loading,
        reloading,
        getClients,
        searchClient,
        setReloading,
        createClient,
        updatedClient,
        deleteClient,
        parsedLinksPagination,
      }}
    >
      {children}
    </ClientsDataContext.Provider>
  );
}

export const useClients = () => useContext(ClientsDataContext);
