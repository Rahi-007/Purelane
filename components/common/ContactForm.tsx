"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone } from "lucide-react";

export const contactSchema = z.object({
    name: z.string().min(2, "Name is too short"),

    email: z.string().email("Invalid email"),

    phone: z.string().optional().or(z.literal("")),

    subject: z.string().min(3, "Subject is required"),

    message: z.string().min(10, "Message is too short"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

interface IProps{
    className?: string;
}

export default function ContactForm({className}: IProps) {
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
        <div className={`mx-auto max-w-7xl mb-10 rounded-md border ${className}`}>
            <h1 className="bg-black text-white font-bold text-3xl p-4 rounded-t-md text-center">Get In Touch With Us </h1>
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6">
                    <div className="flex gap-4 border-b py-6">
                        <Phone className="mt-1 h-5 w-5" />
                        <div>
                            <p className="text-sm text-gray-500">Phone Number</p>
                            <p className="font-semibold">+880 1473-865439</p>
                        </div>
                    </div>

                    <div className="flex gap-4 border-b py-6">
                        <Mail className="mt-1 h-5 w-5" />
                        <div>
                            <p className="text-sm text-gray-500">Email Address</p>
                            <p className="font-semibold">support@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-5">
                        <MapPin className="mt-1 h-5 w-5" />
                        <div>
                            <p className="text-sm text-gray-500">Location</p>
                            <p className="leading-7 text-gray-700">
                                2841 Wellman Ave
                                <br />
                                Bronx, NY 10461
                                <br />
                                United States
                            </p>
                        </div>
                    </div>
                </div>
                {/* RIGHT SIDE */}
                <div className="p-6">

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">

                        <h2 className="text-2xl font-bold mb-2">
                            Send us a message
                        </h2>

                        <div className="grid grid-cols-2 gap-4">

                            {/* NAME */}
                            <div>
                                <input
                                    {...register("name")}
                                    placeholder="Name"
                                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <p className="text-red-500 text-sm">{errors.name?.message}</p>
                            </div>

                            {/* EMAIL */}
                            <div>
                                <input
                                    {...register("email")}
                                    placeholder="Email"
                                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <p className="text-red-500 text-sm">{errors.email?.message}</p>
                            </div>

                            {/* PHONE */}
                            <div>
                                <input
                                    {...register("phone")}
                                    placeholder="Phone (optional)"
                                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <p className="text-red-500 text-sm">{errors.phone?.message}</p>
                            </div>

                            {/* SUBJECT */}
                            <div>
                                <input
                                    {...register("subject")}
                                    placeholder="Subject"
                                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <p className="text-red-500 text-sm">{errors.subject?.message}</p>
                            </div>

                            {/* MESSAGE */}
                            <div className="col-span-2">
                                <textarea
                                    {...register("message")}
                                    placeholder="Message"
                                    rows={5}
                                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <p className="text-red-500 text-sm">{errors.message?.message}</p>
                            </div>

                            {/* BUTTON */}
                            <div className="col-span-2">
                                <button
                                    disabled={isSubmitting}
                                    className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}
