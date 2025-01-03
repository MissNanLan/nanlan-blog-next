import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import { Sidebar } from "@/components/sidebar";
import { QueryProvider } from "@/providers/query-provider";
import "./globals.css";
import { DataProvider } from "@/providers/data-provider";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <DataProvider>
            <Header />
            <Main left={children} right={<Sidebar />} />
          </DataProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
