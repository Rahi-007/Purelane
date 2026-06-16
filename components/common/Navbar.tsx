"use client";

import { Search, ShoppingCart, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
interface IProps {
  gap?: boolean;
}

const Navbar = ({ gap = false }: IProps) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const top = gap ? "sm:top-12" : "sm:top-14";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const route = [
    { label: "Best Buy", link: "/best" },
    { label: "Shop Now", link: "/shop" },
    { label: "Contact", link: "/contact" },
    { label: "About", link: "/about" },
  ];

  return (
    <div
      className={`fixed left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "top-[22px] sm:top-8" : `top-8 px-2 sm:px-6 ${top}`
      }`}>
      <div
        className={`flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "bg-white/85 h-10 backdrop-blur-xl shadow-lg rounded-none"
            : "bg-white h-12 shadow-sm rounded-xl"
        }`}>
        {/* Logo */}
        <Link href="/">
          <h1
            className="pl-4 text-xl"
            style={{ fontFamily: "var(--font-pacifico)" }}>
            Purelane
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6">
          {route.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className={`relative text-sm font-medium transition-colors ${
                pathname === item.link
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }`}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden sm:flex gap-4 items-center pr-4">
          <Search className="w-5 h-5 cursor-pointer" />
          <ShoppingCart className="w-5 h-5 cursor-pointer" />
        </div>

        {/* Mobile */}
        <div className="sm:hidden pr-4">
          <Menu className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
