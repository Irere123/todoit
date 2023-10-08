import React from "react";
import ProtectedPage from "../components/ProtectedPage";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <ProtectedPage>
      <div>
        <p>Hello dashboard</p>
      </div>
    </ProtectedPage>
  );
};
