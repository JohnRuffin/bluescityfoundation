import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bluescityfoundation.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Blues City Foundation",
  description: "In support of the Iota Omicron Chapter of Omega Psi Phi Fraternity Inc - Clarksdale, Mississippi",
  icons: {
    icon: ['/favicon.svg', '/favicon.ico'],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Blues City Foundation",
    description:
      "In support of the Iota Omicron Chapter of Omega Psi Phi Fraternity Inc - Clarksdale, Mississippi",
    url: siteUrl,
    siteName: "Blues City Foundation",
    images: [
      {
        url: "/crossroadsLogo.png",
        alt: "Blues City Foundation logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blues City Foundation",
    description:
      "In support of the Iota Omicron Chapter of Omega Psi Phi Fraternity Inc - Clarksdale, Mississippi",
    images: ["/crossroadsLogo.png"],
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
