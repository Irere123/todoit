import React from "react";
import ProtectedPage from "./ProtectedPage";
import { Sidebar } from "./Sidebar";

interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <ProtectedPage>
      <div className="flex flex-col w-full h-full  flex-1">
        <div
          className="relative"
          style={{
            display: "grid",
            gridTemplateColumns: "200px 1fr",
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
