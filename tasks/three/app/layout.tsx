import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Open_Sans as OpenSans } from "next/font/google";
import Header from "@/lib/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Short Blog",
  description: "HSI Sandbox Level 3 Quiz",
};

const openSans = OpenSans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} font-sans px-56 py-8 font-semibold`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
