"use client";

import { useRouter } from "next/navigation";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import products from "../../data/product.json";
import Link from "next/link";
import Image from "next/image";

interface IProps {
  gap?: boolean;
}

const Navbar = ({ gap = false }: IProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [remove, setRemove] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
    { label: "About Us", link: "/policy" },
  ];

  const loadCart = () => {
    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    setCartItems(cart);
  };

  const [cartItems, setCartItems] = useState<
    { id: number; quantity: number }[]
  >(() => {
    if (typeof window === "undefined") return [];

    return JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
  });

  const HandleRemoveFromCart = (productId: number) => {
    const existingCart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const updatedCart = existingCart.filter(
      (item: { id: number; quantity: number }) =>
        item.id !== productId
    );

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setRemove(true);

    setTimeout(() => {
      setCartOpen(false);
      setRemove(false);
    }, 2000);
  };

  return (
    <div
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
            className="pl-4 text-xl text-[#07484a]"
            style={{ fontFamily: "var(--font-pacifico)" }}
          >
            Purelane
          </motion.h1>
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
                  ? "text-[#07484a]"
                  : "text-gray-500 hover:text-[#07484a]"
                  }`}>
                {item.label}
                {pathname === item.link && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 h-0.5 w-[94%] bg-[#07484a] ml-0.5"
                  />
                )}
              </Link>
            </motion.span>
          ))}
        </div>
        <div className="hidden sm:flex gap-4 items-center pr-4">
          {/* <Search className="w-5 h-5 cursor-pointer" /> */}
          <ShoppingCart
            className="w-5 h-5 cursor-pointer text-[#07484a] font-semibold"
            onClick={() => {
              loadCart();
              setCartOpen(true);
            }}
          />
        </div>

        {/* Mobile */}
        <div className="sm:hidden pr-4">
          {isOpen ? (
            <X
              className="w-5 h-5 cursor-pointer text-[#07484a]"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <Menu
              className="w-5 h-5 cursor-pointer text-[#07484a]"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>
      <div className="relative">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 top-full mt-2 z-50 sm:hidden bg-white rounded-xl shadow-lg p-4 min-w-40"
            >
              <div className="flex flex-col gap-4">
                {route.map((item) => (
                  <Link
                    key={item.link}
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm ${pathname === item.link
                      ? "font-semibold text-[#07484a]"
                      : "text-gray-500"
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="flex gap-4 pt-2 border-t">
                  {/* <Search className="w-5 h-5 cursor-pointer" /> */}
                  <ShoppingCart
                    className="w-5 h-5 cursor-pointer text-[#07484a]"
                    onClick={() => {
                      loadCart();
                      setCartOpen(true);
                    }}
                  /> Cart
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {cartOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setCartOpen(false)}
                className="fixed inset-0 bg-black/40 z-50"
              />

              {/* Cart Drawer */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 right-0 h-screen w-[320px] bg-white z-50 shadow-xl p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <h2 className="font-semibold text-lg text-[#07484a]">
                    Cart
                  </h2>

                  <X
                    className="cursor-pointer text-[#07484a]"
                    onClick={() => setCartOpen(false)}
                  />
                </div>

                <div className="">
                  {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                  ) : (
                    cartItems.map((item) => {
                      const product = products.find(
                        (p) => p.id === item.id
                      );

                      if (!product) return null;

                      return (
                        <div
                          key={item.id}
                          onClick={() => router.push(`/shop/${item.id}`)}
                          className="flex items-start gap-3 border-b py-3 cursor-pointer relative"
                        >
                          <Image
                            src={product.image[0]}
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded"
                            width={100}
                            height={100}
                          />

                          <div>
                            <h3 className="font-medium text-[#07484a]">
                              {product.name}
                            </h3>
                            <p className="text-[#07484a]">Qty: {item.quantity}</p>
                            <p className="text-[#07484a]">
                              $
                              {(product.discountPrice *
                                item.quantity).toFixed(2)}
                            </p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              HandleRemoveFromCart(product.id);
                            }}
                            className="bg-red-500 text-white absolute bottom-2 right-1 border rounded-full px-2 py-1 text-xs cursor-pointer z-1"
                          >
                            {remove ? "Removed ✓" : "Remove"}
                          </button>
                        </div>
                      );
                    })
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
