"use client";
import ProtectedPage from "@/components/ProtectedPage";
import { AuthContext } from "@/contexts/AuthContext";
import { getTodos } from "@/graphql/todo";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { useQuery } from "react-query";

export default function DashboardPage() {
  const { user } = useContext(AuthContext);
  const [todo, setTodo] = useState("");
  const { data, isLoading } = useQuery("getTodos", getTodos);

  if (isLoading) {
    return <div>loading...</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        <div>
          {data?.getTodos.map((t) => (
            <ul className="list-item" key={t.id}>
              <li>{t.text}</li>
            </ul>
          ))}
        </div>
      </main>
    </ProtectedPage>
  );
}
