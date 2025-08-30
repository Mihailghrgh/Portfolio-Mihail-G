import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mihail's Portfolio",
  description:
    "Portfolio made for user's to have a look at my projects and experience",
  generator: "Mihail's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" title="Mihail's Portfolio">
      <body>{children}</body>
    </html>
  );
}
