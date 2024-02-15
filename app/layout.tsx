import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Ryo Saputra",
  description: "Portfolio",
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    "og:type": "website",
    "google-site-verification": "SCiAEGoilvCf_5f9X4r6TBqBpKT08jKnH7DY14kfhCE" 
  },
  icons: "/logo-s.png",
};
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
