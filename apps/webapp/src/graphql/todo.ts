import { Todo } from "@/entities/todo";
import { gqlClient } from "@/lib/gqlClient";
import { gql } from "graphql-request";

export const CREATE_TODO_SUBSCRIPTION = gql`
  subscription TodoAdded($creatorId: ID!) {
    todoAdded(creatorId: $creatorId) {
      id
      text
      completed
      createdAt
      updatedAt
    }
  }
`;

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

const CREATE_TODO_MUTATION = gql`
  mutation CreateTodo($text: String!) {
    createTodo(text: $text) {
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

export const createTodo = async (
  text: string
): Promise<{ createTodo: Todo }> => {
  const resp = await gqlClient.rawRequest<{ createTodo: Todo }>(
    CREATE_TODO_MUTATION,
    { text }
  );

  return resp.data;
};
