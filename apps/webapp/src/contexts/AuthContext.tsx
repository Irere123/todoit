"use client";

import { User } from "@/entities/user";
import { getMe } from "@/graphql/user";
import React, { createContext } from "react";
import { useQuery } from "react-query";

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
  const { data, isLoading } = useQuery("me", getMe);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user: data?.me!, updateUser() {} }}>
      {children}
    </AuthContext.Provider>
  );
};
