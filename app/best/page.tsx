"use client"

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";
import ProductCard from "@/components/product/ProductCard";
import products from "../../data/product.json";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion.utils";

export default function Page() {
  return (
    <div className="bg-[#edeae4] min-h-screen">
      <Header />
      <Navbar gap={true} />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        custom={{ y: 30 }}
        className="px-4 py-20 mx-auto max-w-7xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
