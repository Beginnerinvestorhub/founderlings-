import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Founderlings | Beginner Investor Hub",
  description: "Join the first 1,000 founding members of Beginner Investor Hub - AI-powered investing education platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
