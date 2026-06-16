import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#edeae4] h-[92vh] sm:p-3 mt-6 sm:mt-7">
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
