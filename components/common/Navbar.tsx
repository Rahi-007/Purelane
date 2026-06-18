"use client";

import { Search, ShoppingCart, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    { label: "Contact Us", link: "/contact" },
    { label: "About Us", link: "/about" },
  ];

  return (
    <motion.div
      // initial={{ y: 5, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // transition={{ duration: 0.5 }}
      className={`fixed left-0 w-full z-50 transition-all duration-500 
        ${scrolled ? "top-5.5 sm:top-8" : `top-8 px-2 sm:px-6 ${top}`}`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-500 ${scrolled
          ? "bg-white/85 h-10 backdrop-blur-xl shadow-lg rounded-none"
          : "bg-white h-12 shadow-sm rounded-xl"
          }`}>
        {/* Logo */}
        <Link href="/">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="pl-4 text-xl"
            style={{ fontFamily: "var(--font-pacifico)" }}
          >Purelane</motion.h1>
        </Link>
        <div className="hidden sm:flex gap-6">
          {route.map((item) => (
            <motion.span
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              key={item.link}>
              <Link
                href={item.link}
                className={`relative text-sm font-medium transition-colors ${pathname === item.link
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
                  }`}>
                {item.label}
                {pathname === item.link && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-black"
                  />
                )}
              </Link>
            </motion.span>
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
    </motion.div>
  );
};

export default Navbar;
