import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-blue-50 h-[90vh] sm:p-3">
      <div className="relative h-full w-full overflow-hidden sm:rounded-2xl sm:border">
        <Image
          src="/banner/banner1.jpg"
          alt="Banner"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
