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
import { GroupsProps } from "../types/groups";

type GroupsDataContextProps = {
  getGroups: () => Promise<void>;
  searchGroup: (groupName: string) => Promise<void>;
  createGroup: (group: CreateGroupProps) => Promise<void>;
  updateGroup: (group: GroupsProps) => Promise<void>;
  setReloading: Dispatch<SetStateAction<boolean>>;
  groups: GroupsProps[];
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

type GroupsDataProviderProps = {
  children: ReactNode;
};

type CreateGroupProps = {
  description: string;
};

export const GroupsDataContext = createContext({} as GroupsDataContextProps);

export function GroupsDataProvider({ children }: GroupsDataProviderProps) {
  const [groups, setGroups] = useState<GroupsProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [reloading, setReloading] = useState(false);

  async function getGroups() {
    setLoading(true);

    const response = await api.get("/groups");

    if (response) {
      if (response.status === 200) {
        setGroups(response.data);
      }
    }

    setLoading(false);
  }

  useEffect(() => {
    getGroups();
  }, [reloading]);

  async function searchGroup(groupName: string) {
    setLoading(true);

    const response = await api.get(`/groups?description_like=${groupName}`);

    if (response) {
      if (response.status === 200) {
        setGroups(response.data);
      }
    }

    setLoading(false);
  }

  async function createGroup(group: CreateGroupProps) {
    try {
      await api.post("/groups", group);
    } catch (error) {
      toast.error("Erro ao cadastrar um novo grupo.");
    }
  }

  async function updateGroup(group: GroupsProps) {
    try {
      await api.put(`/groups/${group.id}`, group);
    } catch (error) {
      toast.error("Erro ao atualizar o grupo.");
    }
  }

  return (
    <GroupsDataContext.Provider
      value={{
        getGroups,
        searchGroup,
        createGroup,
        updateGroup,
        setReloading,
        groups,
        loading,
        setLoading,
      }}
    >
      {children}
    </GroupsDataContext.Provider>
  );
}

export const useGroups = () => useContext(GroupsDataContext);
