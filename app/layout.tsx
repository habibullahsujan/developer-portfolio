import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/navbar/Navbar";
import Footer from "./(components)/footer/Footer";

const SourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Habib | Web Developer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${SourceCodePro.className}, max-w-7xl mx-auto`}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
