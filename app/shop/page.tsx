"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/common/Navbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import StoreProductCard from "@/components/product/StoreProductCard";
import products from "../../data/product.json";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const categories = [
  "Uncategorized",
  "Beef Noodles",
  "Chicken Noodle",
  "Cup Noodles",
  "Groceries",
  "Juice",
  "Tomato Paste",
  "Tomato Sauce",
];

type Product = {
  id: number;
  name: string;
  variant: string;
  sku: string;
  category: string[];
  discountPrice: number;
  price: number;
  review: number;
  narration: string;
  image: string[];
};

const ITEMS_PER_PAGE = 21;

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(500);
  const [currentPage, setCurrentPage] = useState(1);
  const [openFilter, setOpenFilter] = useState(false);

  // FILTER (optimized with useMemo)
  const filteredProducts = useMemo(() => {
    return products.filter((item: Product) => {
      const matchCategory =
        selectedCategory === "All" ||
        item.category.includes(selectedCategory);

      const matchPrice = item.price <= maxPrice;

      return matchCategory && matchPrice;
    });
  }, [selectedCategory, maxPrice]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  // invalid page instead of useEffect
  const safeCurrentPage =
    currentPage > totalPages ? 1 : currentPage;

  const currentProducts = filteredProducts.slice(
    (safeCurrentPage - 1) * ITEMS_PER_PAGE,
    safeCurrentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Header />
      <Navbar gap={true} />

      <div className="flex flex-col md:flex-row gap-6 p-2 sm:p-6 mt-22 sm:mt-24">
        <button
          onClick={() => setOpenFilter(!openFilter)}
          className="md:hidden w-full p-2 border rounded bg-black text-white"
        >
          {openFilter ? "Hide Filters" : "Show Filters"}
        </button>
        {/* ================= FILTER ================= */}
        <div className={`w-full md:w-1/4 border p-4 rounded-lg h-fit md:sticky md:top-20
          ${openFilter ? "block" : "hidden md:block"}`}>
          <h2 className="font-bold mb-3">Top Categories</h2>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`p-2 rounded ${selectedCategory === "All"
                ? "bg-black text-white"
                : "bg-gray-100"
                }`}
            >
              All
            </button>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`p-2 rounded ${selectedCategory === cat
                  ? "bg-black text-white"
                  : "bg-gray-100"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="font-bold mb-2">Max Price</h2>

            <input
              type="range"
              min="0"
              max="500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-black cursor-pointer"
            />

            <p className="mt-2">Up to: ${maxPrice}</p>
          </div>
        </div>

        {/* ================= PRODUCTS ================= */}
        <div className="w-full md:w-3/4">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentProducts.map((product) => (
              <StoreProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* ================= PAGINATION ================= */}
          {totalPages > 1 && (
            <Pagination className="mt-10">
              <PaginationContent>

                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => goToPage(currentPage - 1)}
                    className={
                      currentPage === 1
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      isActive={currentPage === i + 1}
                      onClick={() => goToPage(i + 1)}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => goToPage(currentPage + 1)}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>

              </PaginationContent>
            </Pagination>
          )}

        </div>
      </div>

      <Footer />
    </div>
  );
}