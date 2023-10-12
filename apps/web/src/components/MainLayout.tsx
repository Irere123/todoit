import React from "react";
import ProtectedPage from "./ProtectedPage";
import { Sidebar } from "./Sidebar";

interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <ProtectedPage>
      <div className="w-full h-full flex">
        <div
          className="relative"
          style={{
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            columnGap: 60,
          }}
        >
          <Sidebar />
          {children}
        </div>
      </div>
    </ProtectedPage>
  );
};
