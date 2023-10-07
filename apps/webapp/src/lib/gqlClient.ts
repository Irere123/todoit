import { GraphQLClient } from "graphql-request";
import { useTokenStore } from "@/stores/useTokenStore";

export const gqlClient = new GraphQLClient("http://localhost:4000/graphql", {
  headers: { authorization: `Bearer ${useTokenStore.getState().accessToken}` },
});
