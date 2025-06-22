import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { NavBar } from "@/components/nav-bar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Srinivasan Durairaj's Portfolio",
  description: "A minimalistic personal portfolio for professional use",
};

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
