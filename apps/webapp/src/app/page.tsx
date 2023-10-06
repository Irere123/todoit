"use client";

import { Button } from "@/components/Button";
import { GoogleIcon } from "@/icons";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  return (
    <main className="flex flex-col gap-6 justify-center items-center w-full h-full">
      <h1 className="text-3xl font-bold">todoit</h1>
      <Button onClick={() => {}} icon={<GoogleIcon />}>
        Login with Google
      </Button>
    </main>
  );
}
