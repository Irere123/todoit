"use client";
import ProtectedPage from "@/components/ProtectedPage";
import React, { useState } from "react";

export default function DashboardPage() {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <ProtectedPage>
      <main className="flex justify-center items-center w-full h-full">
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
      </main>
    </ProtectedPage>
  );
}
