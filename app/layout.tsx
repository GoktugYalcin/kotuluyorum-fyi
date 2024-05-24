import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const Space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  creator: "A. Göktuğ Yalçın",
  title: "Kötülüyorum.fyi",
  description: "Neden bir ürün tamamen iyi olsun ki?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Space.className}>{children}</body>
    </html>
  );
}
