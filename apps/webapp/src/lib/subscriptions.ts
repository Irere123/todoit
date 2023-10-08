import { Client, createClient } from "graphql-ws";

export const createSubscriptionClient = (token: string) => {
  return createClient({
    url: "ws://localhost:4000/graphql",
    lazy: true,
    connectionParams: { authorization: token },
  });
};
