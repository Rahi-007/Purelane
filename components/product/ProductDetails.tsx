"use client";

import Rating from "./Rating";
import { useState } from "react";
import { Product } from "./Tabs";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const increaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQty = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const HandleAddToCart = () => {
    const cartItem = {
      id: product.id,
      quantity,
    };

    const existingCart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const existingProduct = existingCart.find(
      (item: { id: number; quantity: number }) =>
        item.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      existingCart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div>
      <h1 className="text-2xl sm:text-4xl font-bold">
        {product.variant}
      </h1>
      <Rating rating={4.5} number={product.review} />

      <div className="mt-5 flex items-end gap-3">
        <span className="text-3xl font-bold text-red-600">
          ${product.discountPrice}
        </span>

        <span className="text-lg line-through text-gray-400">
          ${product.price}
        </span>
        <span className="text-lg">
          + {product.isFreeShipping ? "Free Shipping" : ""}
        </span>
      </div>

      <p className="mt-5 text-sm md:text-md text-gray-600 leading-7">
        {product.narration}
      </p>

      {/* Quantity */}
      <div className="mt-6">
        <div className="flex items-center gap-3">
          <button
            onClick={decreaseQty}
            className="h-10 w-10 border rounded"
          >
            -
          </button>

          <span className="text-lg min-w-8 text-center">
            {quantity}
          </span>

          <button
            onClick={increaseQty}
            className="h-10 w-10 border rounded"
          >
            +
          </button>

          <button
            className="bg-black text-white px-8 py-2 rounded-lg"
            onClick={HandleAddToCart}
          >
            {added ? "Added ✓" : "Add To Cart"}
          </button>
        </div>
      </div>

      {/* Extra Info */}
      <div className="mt-8 border-t pt-2 text-sm text-gray-600 flex justify-between">
        <p>SKU: {product.sku}</p>
        <p>Category: {product.category.join(", ")}</p>
      </div>
    </div>
  );
};

export default ProductDetails;