"use client";

import { Search, ShoppingCart, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const route = [
    {
      label: "Best Sellers",
      link: "/best",
    },
    {
      label: "Shop Now",
      link: "/shop",
    },
    {
      label: "Contact",
      link: "/contact",
    },
    {
      label: "About",
      link: "/about",
    },
  ];
  return (
    <div className="h-10 px-2 sm:px-6 fixed top-8 sm:top-14 w-full">
      <div className="flex justify-between items-center bg-white h-full rounded-lg px-1 sm:px-2">
        <Link href="/">
          <h1
            className="pl-2 text-xl"
            style={{ fontFamily: "var(--font-pacifico)" }}>
            Purelane
          </h1>
        </Link>
        <div className="hidden sm:flex gap-4">
          {route.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`text-sm font-medium transition-colors hover:text-gray-600 ${
                pathname === item.link ? "text-black" : "text-gray-500"
              }`}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden sm:flex gap-4 items-center pr-2">
          <Search className="w-5 h-5 cursor-pointer text-gray-700" />
          <ShoppingCart className="w-5 h-5 cursor-pointer text-gray-700" />
        </div>
        <div className="sm:hidden pr-2">
          <Menu className="w-5 h-5 cursor-pointer text-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
