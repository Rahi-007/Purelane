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

const ProductCard = ({ product }: IProps) => {
  return (
    <Link href={`/shop/${product.id}`} className="block h-full">
      <div className="group h-full overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col">
        <div className="relative overflow-hidden">
          <Image
            src={product.image[0]}
            alt={product.name}
            width={400}
            height={400}
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-black/50" />

          {/* Explore Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
            <span className="px-5 py-2 text-xl font-bold text-white">
              Explore →
            </span>
          </div>

          <span className="absolute right-0 top-0 bg-red-600 px-4 py-1 text-xs font-bold text-white">
            SALE
          </span>
        </div>

        <div className="flex-1 p-4 flex flex-col">
          <h3 className="line-clamp-1 text-sm font-semibold">{product.name}</h3>

          <p className="mt-1 line-clamp-2 text-xs text-gray-500">
            {product.variant}
          </p>

          <div className="mt-auto pt-4 flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-red-600">
                ${product.discountPrice}
              </span>

              <span className="text-sm text-gray-400 line-through">
                ${product.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
