import { gql, useQuery } from "urql";
import React, { createContext } from "react";
import { User } from "../types/entieties";

const meQuery = gql`
  query {
    me {
      id
      username
      email
      avatarUrl
      createdAt
      updatedAt
    }
  }
`;

export type AuthCtx = {
  user: User | null;
  updateUser: (user: User | null) => void;
};

export const AuthContext = createContext<AuthCtx>({
  user: null,
  updateUser: () => {},
});

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [{ data, fetching }] = useQuery({ query: meQuery });

  if (fetching) {
    return <div>loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user: data.me, updateUser() {} }}>
      {children}
    </AuthContext.Provider>
  );
};
