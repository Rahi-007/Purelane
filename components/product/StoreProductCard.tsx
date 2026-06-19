"use client";

import Image from "next/image";
import Link from "next/link";

interface IProduct {
    id: number;
    name: string;
    variant: string;
    price: number;
    discountPrice: number;
    review: number;
    image: string[];
}

interface IProps {
    product: IProduct;
}

const StoreProductCard = ({ product }: IProps) => {
    const discountPercentage = Math.round(
        ((product.price - product.discountPrice) / product.price) * 100
    );
    return (
        <Link href={`/shop/${product.id}`} className="block h-full">
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                {/* IMAGE */}
                <div className="relative h-64 w-full overflow-hidden bg-gray-100">

                    <Image
                        src={product.image[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:bg-black/40" />

                    {/* QUICK VIEW TEXT */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
                        <span className="rounded-full px-5 py-2 text-xl font-bold text-white">
                            Quick View →
                        </span>
                    </div>

                    {/* DISCOUNT BADGE */}
                    {product.discountPrice < product.price && (
                        <span className="absolute right-3 top-3 rounded-full bg-red-500 px-3 py-1 text-[10px] font-bold text-white">
                            {discountPercentage}% OFF
                        </span>
                    )}
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-4">

                    {/* NAME */}
                    <h3 className="line-clamp-1 text-sm font-semibold text-gray-900">
                        {product.name}
                    </h3>

                    {/* VARIANT */}
                    <p className="mt-1 line-clamp-2 text-xs text-gray-500">
                        {product.variant}
                    </p>

                    {/* PRICE */}
                    <div className="mt-auto flex items-end justify-between pt-4">

                        <div className="flex flex-col">
                            <span className="text-xs text-gray-400 line-through">
                                ${product.price}
                            </span>
                            <span className="text-xl font-bold text-gray-900">
                                ${product.discountPrice}
                            </span>

                        </div>

                        {/* MINI CTA */}
                        <button className="rounded-lg border px-3 py-1 text-xs font-medium text-gray-700 transition hover:bg-black hover:text-white">
                            Add to Bag
                        </button>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default StoreProductCard;