"use client"

import Image from "next/image";
import Title from "../common/Tittle";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion.utils";

const categories = [
    { name: "Protein", image: "/products/product_03_des_01.jpg" },
    { name: "Supplements", image: "/products/product_03_des_02.jpg" },
    { name: "Vitamins", image: "/products/product_03_des_03.jpg" },
    { name: "Snacks", image: "/products/product_03_des_04.jpg" },
    { name: "Health Care", image: "/products/product_03_des_05.jpg" },
];

const CategoryCard = ({
    name,
    image,
    className = "",
}: {
    name: string;
    image: string;
    className?: string;
}) => (
    <div className={`group relative h-full overflow-hidden rounded-lg sm:rounded-3xl ${className}`}>
        <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/55" />

        {/* Hover Content */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
            <div className="text-center text-white">
                <h3 className="text-2xl font-bold">{name}</h3>
                <span className="mt-2 inline-block text-sm tracking-wider uppercase">
                    Explore →
                </span>
            </div>
        </div>
    </div>
);

export default function CategoryList() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            custom={{ y: 40 }}
            className="mx-auto max-w-7xl pb-8 px-1"
        >
            <Title title="View Our Range of Categories" link="/" />

            <div className="hidden md:grid md:grid-cols-3 gap-5 h-150">
                {/* Left */}
                <div className="grid grid-rows-2 gap-5">
                    <CategoryCard {...categories[0]} />
                    <CategoryCard {...categories[1]} />
                </div>

                {/* Center */}
                <CategoryCard {...categories[2]} />

                {/* Right */}
                <div className="grid grid-rows-2 gap-5">
                    <CategoryCard {...categories[3]} />
                    <CategoryCard {...categories[4]} />
                </div>
            </div>

            {/* Mobile */}
            <div className="grid md:hidden gap-4">
                {categories.map((category, index) => (
                    <motion.div
                        key={category.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.1,
                        }}
                        className="relative h-56"
                    >
                        <CategoryCard {...category} />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}