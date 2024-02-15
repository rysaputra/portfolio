import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ryo Saputra",
  description: "Portfolio",
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    "og:type": "website",
  },
  icons: "/logo-s.png",
};
<Head>
<meta name="google-site-verification" content="SCiAEGoilvCf_5f9X4r6TBqBpKT08jKnH7DY14kfhCE" />
</Head>
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100">
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  );
}
