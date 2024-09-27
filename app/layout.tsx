import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Header from "@/components/Navbar";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

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
        className={`${poppins.className} overflow-y-scroll overflow-x-hidden`}
      >
        <NextThemesProvider attribute="class" defaultTheme="system">
          <Header />
          {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}