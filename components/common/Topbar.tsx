"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import products from "../../data/product.json";

const Topbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prev =>
      prev === products.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white flex justify-between items-center h-8 px-1">
      <button onClick={prevSlide}>
        <ChevronLeft className="w-5 h-5" />
      </button>

      <p className="text-sm">
        {products[currentIndex].description}
      </p>

      <button onClick={nextSlide}>
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Topbar;