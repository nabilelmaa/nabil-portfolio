import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Navbar";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nabil's Portfolio",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-y-scroll overflow-x-hidden`}
      >
        <NextThemesProvider attribute="class" defaultTheme="system">
          <Header />
          {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}
