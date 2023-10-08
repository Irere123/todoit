import { useTokenStore } from "@/stores/useTokenStore";
import type { Client } from "graphql-ws";
import React, { useEffect, useMemo, useState } from "react";

export interface SubscriptionContextData {
  subscriptionClient: Client | null;
  connected: boolean;
}

const SubscriptionContext = React.createContext<SubscriptionContextData>({
  subscriptionClient: null,
  connected: false,
});

export default SubscriptionContext;

export type SubscriptionContextProviderProps = {
  children?: React.ReactNode;
};

export const SubscriptionContextProvider: React.FC<
  SubscriptionContextProviderProps
> = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [subscriptionClient, setSubscriptionClient] = useState<Client | null>(
    null
  );
  const token = useTokenStore.getState().accessToken;

  useEffect(() => {
    if (!subscriptionClient) {
      requestIdleCallback(() => {
        import("../lib/subscriptions").then(({ createSubscriptionClient }) => {
          const client = createSubscriptionClient(token);
          setSubscriptionClient(client);
          client.on("connected", () => setConnected(true));
        });
      });
    }
  });

  const contextData = useMemo(
    () => ({ connected, subscriptionClient }),
    [connected, subscriptionClient]
  );

  return (
    <SubscriptionContext.Provider value={contextData}>
      {children}
    </SubscriptionContext.Provider>
  );
};
