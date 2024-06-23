import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "Short Blog",
  description: "HSI Sandbox Level 3 Quiz",
};

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-open-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} font-sans py-4 px-8 font-semibold`}>
        {children}
      </body>
    </html>
  );
}
