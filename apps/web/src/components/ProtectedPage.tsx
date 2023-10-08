import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "@tanstack/react-router";
import React, { useContext, useEffect } from "react";

type ProtectedPageProps = {
  children: React.ReactNode;
};

const ProtectedPage: React.FC<ProtectedPageProps> = ({ children }) => {
  const router = useNavigate();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      router({ to: "/dasboard" });
    }
  }, [user, router]);
  return <>{children}</>;
};

export default ProtectedPage;
