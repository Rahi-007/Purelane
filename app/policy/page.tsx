"use client"

import Navbar from "@/components/common/Navbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion.utils";

export default function Page() {
    return (
        <div>
            <Header />
            <Navbar gap={true} />
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={fadeUp}
                custom={{ y: 30 }}
                className="px-4 py-20 mx-auto max-w-7xl"
            >
                <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

                <p>
                    At our food eCommerce platform, we value your privacy and are committed to
                    protecting your personal information. This Privacy Policy explains how we
                    collect, use, and safeguard the information you provide while using our
                    website and services.
                </p>

                <p>
                    By accessing or using our website, you agree to the practices described in
                    this Privacy Policy. If you do not agree with any part of this policy, please
                    discontinue using our services.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">
                    Information We Collect
                </h3>

                <p>
                    We may collect personal information such as your name, email address, phone
                    number, delivery address, and payment-related details when you place an
                    order, create an account, or contact our support team.
                </p>

                <ul className="list-disc pl-6 space-y-2 my-4">
                    <li>Name and contact information</li>
                    <li>Delivery and billing addresses</li>
                    <li>Order history and preferences</li>
                    <li>Payment transaction information</li>
                    <li>Website usage and analytics data</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-8 mb-4">
                    How We Use Your Information
                </h3>

                <p>
                    The information we collect helps us provide a better shopping experience and
                    improve our services. We use your information for the following purposes:
                </p>

                <ul className="list-disc pl-6 space-y-2 my-4">
                    <li>Processing and delivering food orders</li>
                    <li>Managing customer accounts</li>
                    <li>Providing customer support</li>
                    <li>Sending order updates and notifications</li>
                    <li>Improving website performance and user experience</li>
                    <li>Preventing fraud and ensuring platform security</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-8 mb-4">
                    Cookies and Tracking Technologies
                </h3>

                <p>
                    We use cookies and similar technologies to enhance website functionality,
                    remember user preferences, analyze traffic, and improve overall performance.
                    You can choose to disable cookies through your browser settings, although
                    certain features may not function properly.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">
                    Data Security
                </h3>

                <p>
                    We implement industry-standard security measures to protect your personal
                    information from unauthorized access, disclosure, alteration, or destruction.
                    However, no method of online transmission or electronic storage is completely
                    secure, and we cannot guarantee absolute security.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">
                    Third-Party Services
                </h3>

                <p>
                    We may work with trusted third-party providers such as payment gateways,
                    delivery partners, and analytics services. These providers only receive the
                    information necessary to perform their services and are required to protect
                    your data.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">
                    Your Rights
                </h3>

                <ul className="list-disc pl-6 space-y-2 my-4">
                    <li>Access your personal information</li>
                    <li>Request corrections to inaccurate data</li>
                    <li>Request deletion of your account and data</li>
                    <li>Opt out of promotional communications</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-8 mb-4">
                    Changes to This Policy
                </h3>

                <p>
                    We may update this Privacy Policy from time to time. Any changes will be
                    posted on this page, and the updated version will become effective
                    immediately upon publication.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">
                    Contact Us
                </h3>

                <p>
                    If you have any questions regarding this Privacy Policy or how your data is
                    handled, please contact our support team through the contact information
                    provided on our website.
                </p>
            </motion.div>
            <Footer />
        </div>
    );
}
