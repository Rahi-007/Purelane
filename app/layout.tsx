import type { Metadata } from "next";
import { Nunito_Sans, Pacifico } from "next/font/google";
import "./globals.css";

const lato = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-nunito-sans",
});

const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Purelane Shop",
  description: "E-commerce website for personal business",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lato.className} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}