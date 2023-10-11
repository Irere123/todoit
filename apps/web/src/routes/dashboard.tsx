import React, { useContext } from "react";
import ProtectedPage from "../components/ProtectedPage";
import { AuthContext } from "../contexts/AuthContext";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  const { user } = useContext(AuthContext);
  return (
    <ProtectedPage>
      <main>
        <img src={user?.avatarUrl} alt={user?.username} />
        <p>{user?.username}</p>
      </main>
    </ProtectedPage>
  );
};
