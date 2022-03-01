export type ClientsProps = {
  id: number;
  name: string;
  email: string;
  phone: string;
  groupId: number;
};

export type CreateClientProps = {
  name: string;
  email: string;
  phone: string;
  groupId?: number | undefined;
};

export type UpdateClientProps = {
  id: number;
  name: string;
  email: string;
  phone: string;
};
