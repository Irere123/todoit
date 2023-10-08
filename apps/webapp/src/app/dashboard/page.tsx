"use client";
import ProtectedPage from "@/components/ProtectedPage";
import { Todos } from "@/components/Todos";
import { AuthContext } from "@/contexts/AuthContext";
import { createTodo, getTodos } from "@/graphql/todo";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { useMutation, useQuery } from "react-query";

export default function DashboardPage() {
  const { user } = useContext(AuthContext);
  const [todo, setTodo] = useState("");
  const { data, isLoading } = useQuery("getTodos", getTodos);
  const { mutateAsync } = useMutation("createTodo", createTodo);

  if (isLoading) {
    return <div>loading...</div>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await mutateAsync(todo);
    setTodo("");
  };

  return (
    <ProtectedPage>
      <main className="flex flex-col p-3 gap-5 mx-auto">
        <div className="flex gap-5">
          <Image
            src={user!.avatarUrl}
            alt={user?.username!}
            width={50}
            height={50}
            className="rounded-full  border-4 border-stone-400"
          />
          <p>{user?.username}</p>
          <p>{user?.id}</p>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2 ">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="enter your todo"
            className="border border-stone-300 px-4 outline-none py-2"
          />
          <button type="submit" className="bg-green-300 px-3 rounded-md">
            add
          </button>
        </form>
        <Todos todos={data?.getTodos!} />
      </main>
    </ProtectedPage>
  );
}
