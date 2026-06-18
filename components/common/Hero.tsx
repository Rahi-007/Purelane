"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "/products/product_03_des_03.jpg",
  "/products/product_03_des_04.jpg",
  "/products/product_03_des_05.jpg"
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 500);
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
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt={`Banner ${current + 1}`}
              fill
              priority
              className="object-contain md:object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div >
  );
};

export default Hero;