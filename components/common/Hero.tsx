"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/products/product_03_des_03.jpg",
  "/products/product_03_des_05.jpg",
  "/products/product_03_des_08.jpg"
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
    <div className="bg-[#edeae4] h-[92vh] sm:p-3 mt-6 sm:mt-7">
      <div className="relative h-full w-full overflow-hidden sm:rounded-2xl sm:border">
        <Image
          src={images[current]}
          alt={`Banner ${current + 1}`}
          fill
          priority
          className={`object-contain md:object-cover transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"
            }`}
        />
      </div>
    </div>
  );
};

export default Hero;