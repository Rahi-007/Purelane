"use client"

import Tittle from "./Tittle";
import products from "../../data/product.json";
import ProductCard from "../product/ProductCard";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion.utils";

const BestBuy = () => {
  const selectedIds = [1, 13, 8, 10];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={fadeUp}
      custom={{ y: 40 }}
      className="pb-8"
    >
      <div className="mx-auto max-w-7xl">
        <Tittle title="Grab The Best Deal" link="/best" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-1">
          {products
            .filter((product) => selectedIds.includes(product.id))
            .map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BestBuy;
