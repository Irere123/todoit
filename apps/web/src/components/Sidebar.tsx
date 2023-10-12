import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "@tanstack/react-router";
import GavelIcon from "../icons/GavalIcon";

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex px-4 py-3 text-slate-900 flex-col h-full flex-1  bg-slate-100 border-r border-slate-300">
      <div>
        <p>{user?.username}</p>
      </div>
      <div className="flex flex-col">
        <Link href={`/`}>Home</Link>
        <Link href={`/tasks`}>
          <GavelIcon />
          Tasks
        </Link>
        <Link href={`/tasks`}>Integrations</Link>
      </div>
    </div>
  );
};
