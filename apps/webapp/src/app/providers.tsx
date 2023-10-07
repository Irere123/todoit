"use client";

import { AuthContextProvider } from "@/contexts/AuthContext";
import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

export const Providers: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </QueryClientProvider>
    </>
  );
};
