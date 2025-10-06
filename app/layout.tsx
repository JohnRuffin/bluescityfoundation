import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blues City Foundation",
  description: "In support of the Iota Omicron Chapter of Omega Psi Phi Fraternity Inc - Clarksdale, Mississippi",
  icons: {
    icon: ['/favicon.svg', '/favicon.ico'],
    apple: '/apple-touch-icon.png',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#581c87" />
      </head>
      <body>{children}</body>
    </html>
  );
}