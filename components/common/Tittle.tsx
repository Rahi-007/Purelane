"use client"

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeLeftAnimation, fadeRightAnimation } from "@/lib/motion.utils";
import { motion } from "framer-motion";

interface IProps {
  title: string;
  link?: string;
}

const Title = ({ title, link }: IProps) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between py-6 px-2 sm:px-0">
      <motion.h2
        {...fadeRightAnimation(30, 0.6)}
        className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 relative inline-block">
        {title}
        <span className="absolute left-0 -bottom-2 h-1 w-16 bg-[#07484a] rounded-full" />
      </motion.h2>

      {link && (
        <motion.div {...fadeLeftAnimation(-30, 0.6)}>
          <Link
            href="/"
            className="group flex items-center gap-2 text-[#07484a] font-medium hover:text-[#043f41] transition"
          >
            See More
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

      )}
    </div>
  );
};

export default Title;