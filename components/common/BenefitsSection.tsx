import { HandCoins, PackageCheck, Headphones } from "lucide-react";

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
        <section className="bg-[#EAF5F8] py-20">
            <div className="container mx-auto px-4">
                <h2 className="mb-14 text-center text-4xl font-bold text-[#0D4F4D]">
                    Benefits for your expediency
                </h2>

                <div className="grid gap-10 md:grid-cols-3">
                    {benefits.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center"
                            >
                                <div
                                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
                                >
                                    <Icon size={32} className="text-[#6A8D8B]" />
                                </div>

                                <h3 className="mb-3 text-2xl font-semibold text-[#0D4F4D]">
                                    {item.title}
                                </h3>

                                <p className="max-w-55 text-[#4D7270]">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}