import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { HeaderComponent } from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

const space_font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CREATORO",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script src="./popup/e872b1a48564.29.js" defer></script>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={space_font.className}>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
