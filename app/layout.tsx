import type { Metadata } from "next";
import { Pacifico, Ruthie } from "next/font/google";
import "./globals.css";

const ruthie = Ruthie({
  weight: "400",
  variable: "--font-ruthie",
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
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }: Readonly<IProps>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${ruthie.variable} ${pacifico.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
