import type { Metadata } from "next";
import "@fontsource/inter";
import "@fontsource/rubik";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paper Store",
  description: "Premium paper and cutting supplies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
