import { User } from "@/entities/user";
import { gqlClient } from "@/lib/gqlClient";
import { gql } from "graphql-request";

const GET_ME_QUERY = gql`
  query GetMe {
    me {
      id
      username
      email
    }
  }
`;

export const getMe = async (): Promise<{ me: User | null }> => {
  const dt = await gqlClient.rawRequest<{ me: User | null }>(GET_ME_QUERY);

  return dt.data;
};
