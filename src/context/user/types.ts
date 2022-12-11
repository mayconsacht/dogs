export type Context = {
  userLogin: (username: string, password: string) => Promise<void>;
  userLogout: () => void;
  data: User | null;
  login: boolean;
  loading: boolean;
  error: string | null;
};

export type User = {
  username: string;
};

export type ContextProp = {
  children: React.ReactNode;
};
