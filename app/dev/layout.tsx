import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rahi | Developer Portfolio",
  description:
    "Rubaied Ahammed Rahi — Full Stack Web Developer - React.js | Next.js | NestJS | ASP.NET | PostgreSQL",
  icons: { icon: "/dev.svg" },
};

export default function DevLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}