"use client"

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-10 md:gap-16">
        <div className="md:w-[40%] md:pr-10">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Image
              src="/logo.jpeg"
              alt="Purelane Logo"
              width={190}
              height={190}
              className="w-auto mb-4"
            />
          </motion.div>

          <p className="text-gray-400 text-sm leading-6 text-justify">
            Discover premium products designed to elevate your everyday
            lifestyle. Quality, comfort, and convenience delivered to your
            doorstep.
          </p>
        </div>

        <div className="md:w-[30%] md:ml-14">
          <h3 className="text-lg md:text-xl font-semibold mb-5">Get in Touch</h3>

          <div className="space-y-3 text-sm text-gray-400">
            <p>PURELANE</p>

            <p>
              2841 Wellman Ave
              <br />
              Bronx, NY 10461
              <br />
              United States
            </p>

            <motion.a
              whileHover={{ x: 4 }}
              href="tel:+18008294933"
              className="block hover:text-white transition">
              1-800-829-4933
            </motion.a>

            <motion.a
              whileHover={{ x: 4 }}
              className="block hover:text-white transition"
              href="mailto:support@aamiramart.com">
              support@purelane.com
            </motion.a>
          </div>
        </div>

        <div className="md:w-[30%]">
          <h3 className="text-lg md:text-xl font-semibold mb-5">Our Policy</h3>

          <div className="flex flex-col gap-3 text-sm text-gray-400">
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/policy"
                className="hover:text-white transition">
                Shipping Policy
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/policy" className="hover:text-white transition">
                Refund & Returns Policy
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/policy"
                className="hover:text-white transition">
                Privacy Policy
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/policy"
                className="hover:text-white transition">
                Order Tracking
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-2 sm:px-0">
        <p className="text-center text-xs text-gray-500 py-3 sm:py-5">
          © {new Date().getFullYear()} Purelane. All Rights Reserved. Built for
          a better shopping experience.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
