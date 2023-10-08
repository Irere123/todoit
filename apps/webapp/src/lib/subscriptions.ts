import { createClient } from "graphql-ws";

export const createSubscriptionClient = (token: string) => {
  return createClient({
    url: "ws://localhost:4000/graphql",
    keepAlive: 1000,
    lazy: true,
    connectionParams: { authorization: token },
  });
};
