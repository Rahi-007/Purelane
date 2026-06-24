"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const images = [
  "/products/product_03_des_04.jpg",
  "/products/product_03_des_03.jpg",
  "/products/product_03_des_02.jpg",
];
const mobileImages = [
  "/products/product_03_03.jpg",
  "/products/product_10_05.jpg",
  "/products/product_11_03.jpg",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#edeae4] h-[96vh] sm:p-3 mt-6 sm:mt-7">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-full w-full overflow-hidden sm:rounded-2xl sm:border"
      >
        {/* IMAGE SLIDER */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 top-40 sm:top-0 h-[90vh] sm:h-auto"
          >
            <Image
              src={images[current]}
              alt="Hero Image"
              fill
              priority
              className="hidden sm:block sm:object-cover"
            />
            <Image
              src={mobileImages[current]}
              alt="Hero Image"
              fill
              priority
              className="object-contain sm:hidden"
            />
          </motion.div>
        </AnimatePresence>

        {/* DARK OVERLAY */}
        {/* <div className="absolute inset-0 bg-black/20" /> */}

        {/* CONTENT OVER IMAGE */}
        <div className="absolute top-20 sm:top-0 sm:inset-0 flex flex-col justify-center px-6 sm:px-16 md:gap-2">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#07484a] text-3xl sm:text-5xl font-bold max-w-xl"
          >
            Exclusive Deals of Many Collections
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-[#07484a]/80 mt-4 mb-2 max-w-md text-sm pr-6 sm:pr-0 sm:text-base"
          >
            Explore different categories. Find the best deals for your style &
            lifestyle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6"
          >
            <Link
              href="/shop"
              className="bg-[#07484a] text-white px-6 py-4 rounded-full font-medium hover:bg-[#04484b] hover:text-white transition"
            >
              Shop Now →
            </Link>
          </motion.div>
        </div>

        {/* DOT INDICATOR */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition ${i === current ? "bg-white" : "bg-white/40"
                }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;