"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heading from "../../data/heading.json";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === heading.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? heading.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white flex justify-center sm:justify-between items-center h-6 sm:h-8 px-1 fixed top-0 w-full z-1">
      <button onClick={prevSlide} className="hidden sm:block">
        <ChevronLeft className="w-5 h-5" />
      </button>

      <p className="text-xs sm:text-sm">{heading[currentIndex].description}</p>

      <button onClick={nextSlide} className="hidden sm:block">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Header;
