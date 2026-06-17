"use client";

import { useState } from "react";
import Image from "next/image";

type Product = {
  name: string;
  image: string[];
};

export default function ProductGallery({
  product,
}: {
  product: Product;
}) {
  const [selectedImage, setSelectedImage] = useState(product.image[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <Image
          src={selectedImage}
          alt={product.name}
          width={600}
          height={600}
          onClick={() => setIsOpen(true)}
          className="rounded-lg cursor-zoom-in"
        />

        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mt-3">
          {product.image.map((img) => (
            <button
              key={img}
              onClick={() => setSelectedImage(img)}
              className={`border rounded-md overflow-hidden ${selectedImage === img
                  ? "border-black"
                  : "border-gray-200"
                }`}
            >
              <Image
                src={img}
                alt={product.name}
                width={200}
                height={200}
                className="w-full aspect-square object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <Image
            src={selectedImage}
            alt={product.name}
            width={2000}
            height={2000}
            className="max-h-[80vh] w-200"
          />
        </div>
      )}
    </>
  );
}