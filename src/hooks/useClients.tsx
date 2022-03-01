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
  createClient: (client: CreateClientProps) => Promise<void>;
  updatedClient: (client: UpdateClientProps) => Promise<void>;
};

export const ClientsDataContext = createContext({} as ClientsDataContextProps);

export function ClientsDataProvider({ children }: ClientsDataProviderProps) {
  const [clients, setClients] = useState<ClientsProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [reloading, setReloading] = useState(false);

  useEffect(() => {
    async function getClients() {
      setLoading(true);

      const response = await api.get("/clients");

      if (response) {
        if (response.status === 200) {
          setClients(response.data);
        }
      }

      setLoading(false);
    }

    getClients();
  }, [reloading]);

  async function createClient(client: CreateClientProps) {
    try {
      await api.post("/clients", client);
    } catch (error) {
      toast.error("Houve um erro ao cadastrar o cliente");
    }
  }

  async function updatedClient(client: UpdateClientProps) {
    try {
      await api.put(`/clients/${client.id}`, client);
    } catch (error) {}
  }

  return (
    <ClientsDataContext.Provider
      value={{
        clients,
        loading,
        reloading,
        setReloading,
        createClient,
        updatedClient,
      }}
    >
      {children}
    </ClientsDataContext.Provider>
  );
}

export const useClients = () => useContext(ClientsDataContext);
