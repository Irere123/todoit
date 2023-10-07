import { Todo } from "@/entities/todo";
import { gqlClient } from "@/lib/gqlClient";
import { gql } from "graphql-request";

const GET_TODOS_QUERY = gql`
  {
    getTodos {
      id
      text
      completed
      createdAt
      updatedAt
    }
  }
`;

export const getTodos = async (): Promise<{ getTodos: Todo[] }> => {
  const resp = await gqlClient.rawRequest<{ getTodos: Todo[] }>(
    GET_TODOS_QUERY
  );
  return resp.data;
};
