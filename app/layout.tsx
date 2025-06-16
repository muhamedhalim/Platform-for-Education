import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ResponsiveNav from "./landing/components/Home/navbar/ResponsiveNav";
import Footer from "./landing/components/Home/footer/footer";
import ScrollToTop from "./landing/components/Helper/scrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Education Platform",
  description: "Education Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {/* Scroll to top button if needed */}
        <ScrollToTop />

        {/* Navbar */}
        <header className=" absolute top-0 bg-indigo-900">
          <ResponsiveNav/>
        </header>
          {children}
      </body>
    </html>
  );
}
