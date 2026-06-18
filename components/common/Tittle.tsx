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
    <div className="flex items-center justify-between py-6 px-2 sm:px-0">
      <motion.h2
        {...fadeRightAnimation(30, 0.6)}
        className="text-2xl sm:text-3xl font-bold text-gray-800 relative inline-block">
        {/* <h2 > */}
        {title}
        <span className="absolute left-0 -bottom-2 h-1 w-16 bg-cyan-700 rounded-full" />
      </motion.h2>

      {link && (
        <motion.div {...fadeLeftAnimation(-30, 0.6)}>
          <Link
            href="/"
            className="group flex items-center gap-2 text-cyan-700 font-medium hover:text-cyan-900 transition"
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