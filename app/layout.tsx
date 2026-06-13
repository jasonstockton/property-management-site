import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Midwest Hospitality Partners | Property Management in Sheboygan & Manitowoc",
  description:
    "Full-service investment property management for Sheboygan & Manitowoc counties. Tenant screening, rent collection, maintenance, short-term rentals, and investment acquisition consulting.",
  keywords:
    "property management Wisconsin, Sheboygan property management, Manitowoc property management, investment property, rental management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-slate-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
