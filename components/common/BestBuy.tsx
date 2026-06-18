"use client"

import Tittle from "./Tittle";
import products from "../../data/product.json";
import ProductCard from "../product/ProductCard";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion.utils";

const BestBuy = () => {
  const selectedIds = [1, 7, 8, 10];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      custom={{ y: 40 }}
      className="pt-6 pb-8"
    >
      <div className=" mx-auto max-w-7xl">
        <Tittle title="Grab The Best Deal" link="/best" />
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 p-1">
          {products
            .filter((product) => selectedIds.includes(product.id))
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BestBuy;
