import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
});

interface IProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Purelane Shop",
  description: "E-commerce website for personal business",
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: Readonly<IProps>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}