import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";

const dm_mono = DM_Mono({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: "Minology - Portfolio",
  description: "A Front End Engineer's Porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_mono.className}>{children}</body>
    </html>
  );
}
