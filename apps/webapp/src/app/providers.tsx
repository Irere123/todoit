"use client";

import { AuthContextProvider } from "@/contexts/AuthContext";
import { SubscriptionContextProvider } from "@/contexts/SubscriptionContext";
import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

export const Providers: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <AuthContextProvider>
          <SubscriptionContextProvider>{children}</SubscriptionContextProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
};
