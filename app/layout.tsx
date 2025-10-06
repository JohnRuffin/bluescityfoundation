import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blues City Foundation",
  description: "In support of the Iota Omicron Chapter of Omega Psi Phi Fraternity Inc - Clarksdale, Mississippi",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}