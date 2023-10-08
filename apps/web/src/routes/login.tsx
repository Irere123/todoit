import React from "react";
import { Button } from "../components/Button";
import { useSaveTokenFromQueryParams } from "../hooks/useSaveTokenFromQueryParams";
import ProtectedPage from "../components/ProtectedPage";

export const Login: React.FC = () => {
  useSaveTokenFromQueryParams();

  return (
    <ProtectedPage>
      <main className="flex flex-col gap-6 justify-center items-center w-full h-full">
        <h1 className="text-3xl font-bold">todoit</h1>
        <Button
          onClick={() => {
            window.location.href = "http://localhost:4000/auth/google";
          }}
        >
          Login with Google
        </Button>
      </main>
    </ProtectedPage>
  );
};
