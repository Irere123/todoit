import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import ProtectedPage from "@/components/ProtectedPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "todoit",
  description: "We help you do your things",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
