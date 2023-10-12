import React from "react";

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="flex text-slate-900 flex-col h-full flex-1  bg-slate-100 border-r border-slate-300">
      <h3>Home</h3>
    </div>
  );
};
