import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { Sidebar } from "@/components/sideBar";
import MainLayout from "@/components/MainLayout";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nanlan Blog",
  description: "A personal blog built with Next.js",
};

export default function RootLayout({ children }: Readonly) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <MainLayout left={children} right={<Sidebar />} />
      </body>
    </html>
  );
}
