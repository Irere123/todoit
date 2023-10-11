import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { MainLayout } from "../components/MainLayout";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  const { user } = useContext(AuthContext);
  return (
    <MainLayout>
      <main className="flex w-full flex-1">
        <p>{user?.username}</p>
      </main>
    </MainLayout>
  );
};
