"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export const contactSchema = z.object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Invalid email"),
    phone: z.string().optional().or(z.literal("")),
    subject: z.string().min(3, "Subject is required"),
    message: z.string().min(10, "Message is too short"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

interface IProps {
    className?: string;
}

export default function ContactForm({ className }: IProps) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            await emailjs.send(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                {
                    from_name: data.name,
                    from_email: data.email,
                    phone: data.phone,
                    subject: data.subject,
                    message: data.message,
                    to_email: "yourmail@gmail.com",
                },
                "YOUR_PUBLIC_KEY"
            );

            alert("Message sent successfully!");
            reset();
        } catch (error) {
            alert(`${error} Failed to send message! `);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
                once: false,
                amount: 0.1,
            }}
            transition={{ duration: 0.7 }}
            className={`mx-auto max-w-[320px] sm:max-w-7xl mb-12 rounded-md border ${className}`}
        >
            <h1 className="bg-black text-white font-bold text-3xl p-4 rounded-t-md text-center">Get In Touch With Us </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-50 p-6"
                >
                    <motion.div
                        whileHover={{ x: 5 }}
                        className="flex gap-4 border-b py-6"
                    >
                        <Phone className="mt-1 h-5 w-5 text-[#07484a]" />
                        <div>
                            <p className="text-sm text-[#07484a]/70">Phone Number</p>
                            <p className="font-semibold text-[#07484a]">+880 1473-865439</p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ x: 5 }}
                        className="flex gap-4 border-b py-6 "
                    >
                        <Mail className="mt-1 h-5 w-5 text-[#07484a]" />
                        <div>
                            <p className="text-sm text-[#07484a]">Email Address</p>
                            <p className="font-semibold text-[#07484a]">support@gmail.com</p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ x: 5 }}
                        className="flex gap-4 border-b py-6"
                    >
                        <MapPin className="mt-1 h-5 w-5 text-[#07484a]" />
                        <div>
                            <p className="text-sm text-[#07484a]">Location</p>
                            <p className="leading-7 text-[#07484a]">
                                2841 Wellman Ave
                                <br />
                                Bronx, NY 10461
                                <br />
                                United States
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                    className="p-6"
                >

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">

                        <h2 className="text-2xl font-bold mb-2 text-[#07484a]">
                            Send us a message
                        </h2>

                        <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">

                            {/* NAME */}
                            <div>
                                <input
                                    {...register("name")}
                                    placeholder="Name"
                                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#07484a]"
                                />
                                <p className="text-red-500 text-sm">{errors.name?.message}</p>
                            </div>

                            {/* EMAIL */}
                            <div>
                                <input
                                    {...register("email")}
                                    placeholder="Email"
                                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#07484a]"
                                />
                                <p className="text-red-500 text-sm">{errors.email?.message}</p>
                            </div>

                            {/* PHONE */}
                            <div>
                                <input
                                    {...register("phone")}
                                    placeholder="Phone (optional)"
                                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#07484a]"
                                />
                                <p className="text-red-500 text-sm">{errors.phone?.message}</p>
                            </div>

                            {/* SUBJECT */}
                            <div>
                                <input
                                    {...register("subject")}
                                    placeholder="Subject"
                                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#07484a]"
                                />
                                <p className="text-red-500 text-sm">{errors.subject?.message}</p>
                            </div>

                            {/* MESSAGE */}
                            <div className="col-span-2">
                                <textarea
                                    {...register("message")}
                                    placeholder="Message"
                                    rows={5}
                                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#07484a]"
                                />
                                <p className="text-red-500 text-sm">{errors.message?.message}</p>
                            </div>

                            {/* BUTTON */}
                            <div className="md:col-span-2">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitting}
                                    className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </motion.button>
                            </div>

                        </div>
                    </form>

                </motion.div>
            </div>
        </motion.div>
    );
}
