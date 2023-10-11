import React from "react";

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <nav className="flex flex-col h-full  bg-slate-500 rounded-b-md px-4">
      <h3>Home</h3>
    </nav>
  );
};
