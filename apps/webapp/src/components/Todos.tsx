import { AuthContext } from "@/contexts/AuthContext";
import { Todo } from "@/entities/todo";
import { CREATE_TODO_SUBSCRIPTION } from "@/graphql/todo";
import useSubscription from "@/hooks/useSubscription";
import React, { useContext } from "react";
import { useQueryClient } from "react-query";

interface TodosProps {
  todos: Todo[];
}

export const Todos: React.FC<TodosProps> = ({ todos }) => {
  const client = useQueryClient();
  const { user } = useContext(AuthContext);

  useSubscription(
    () => ({
      query: CREATE_TODO_SUBSCRIPTION,
      variables: { creatorId: user?.id },
    }),
    {
      next: (data) => {
        console.log(data);
        client.setQueryData("getTodos", (dt: any) => ({
          getTodos: {
            ...dt,
          },
        }));
      },
    }
  );
  return (
    <div>
      {todos.map((t) => (
        <ul className="list-item" key={t.id}>
          <li>{t.text}</li>
        </ul>
      ))}
    </div>
  );
};
