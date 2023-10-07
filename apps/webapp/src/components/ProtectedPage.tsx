"use client";

import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

type ProtectedPageProps = {
  children: React.ReactNode;
};

const ProtectedPage: React.FC<ProtectedPageProps> = ({ children }) => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      router.replace("/dashboard");
    }
  }, [user, router]);
  return <>{children}</>;
};

export default ProtectedPage;
