"use client";

import { Button } from "@/components/Button";
import ProtectedPage from "@/components/ProtectedPage";
import { useSaveTokensFromQueryParams } from "@/hooks/useSaveTokensFromQueryParams";
import { GoogleIcon } from "@/icons";

export default function Home() {
  useSaveTokensFromQueryParams();

  return (
    <ProtectedPage>
      <main className="flex flex-col gap-6 justify-center items-center w-full h-full">
        <h1 className="text-3xl font-bold">todoit</h1>
        <Button
          onClick={() => {
            window.location.href = "http://localhost:4000/auth/google";
          }}
          icon={<GoogleIcon />}
        >
          Login with Google
        </Button>
      </main>
    </ProtectedPage>
  );
}
