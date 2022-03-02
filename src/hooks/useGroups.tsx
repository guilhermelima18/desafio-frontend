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
  createGroup: (group: CreateGroupProps) => Promise<void>;
  setReloading: Dispatch<SetStateAction<boolean>>;
  groups: GroupsProps[];
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
  const [reloading, setReloading] = useState(false);

  async function getGroups() {
    const response = await api.get("/groups");

    if (response) {
      setGroups(response.data);
    }
  }

  useEffect(() => {
    getGroups();
  }, [reloading]);

  async function createGroup(group: CreateGroupProps) {
    try {
      await api.post("/groups", group);
    } catch (error) {
      toast.error("Ocorreu um erro ao cadastrar um novo grupo.");
    }
  }

  return (
    <GroupsDataContext.Provider value={{ createGroup, setReloading, groups }}>
      {children}
    </GroupsDataContext.Provider>
  );
}

export const useGroups = () => useContext(GroupsDataContext);
