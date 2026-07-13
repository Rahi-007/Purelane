"use client"

import { HandCoins, PackageCheck, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@/lib/motion.utils";

export default function BenefitsSection() {
    const benefits = [
        {
            icon: HandCoins,
            title: "Payment Method",
            description: "We offer flexible payment options, to make easier.",
            bg: "bg-purple-100",
        },
        {
            icon: PackageCheck,
            title: "Return policy",
            description: "You can return a product within 30 days.",
            bg: "bg-orange-100",
        },
        {
            icon: Headphones,
            title: "Customer Support",
            description: "Our customer support is 24/7.",
            bg: "bg-green-100",
        },
    ];

    return (
        <section className="bg-[#EAF5F8] py-20 mt-12">
            <div className="container mx-auto px-4">

                <motion.h2 className="mb-14 text-center text-4xl font-bold text-[#0D4F4D]" {...fadeUpAnimation(30, 0.6)}>
                    Benefits for your expediency
                </motion.h2>

                <motion.div
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid gap-10 md:grid-cols-3"
                >
                    {benefits.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center"
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: 5,
                                    }}
                                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
                                >
                                    <Icon size={32} className="text-[#6A8D8B]" />
                                </motion.div>

                                <h3 className="mb-3 text-2xl font-semibold text-[#0D4F4D]">
                                    {item.title}
                                </h3>

                                <p className="max-w-55 text-[#4D7270]">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </motion.div>
            </div >
        </section >
    );
}