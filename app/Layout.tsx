import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Founderlings | Beginner Investor Hub",
  description: "Join the first 1,000 founding members of Beginner Investor Hub - AI-powered investing education platform built by a self-taught developer",
  openGraph: {
    title: "Founderlings | Beginner Investor Hub",
    description: "Join the first 1,000 founding members - Exclusive early access, lifetime benefits, and help shape the future of AI investing education",
    type: "website",
  },
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
