import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";
import ProductCard from "@/components/product/ProductCard";
import products from "../../data/product.json";

export default function Page() {
  return (
    <div className="bg-[#edeae4] min-h-screen">
      <Header />
      <Navbar gap={true} />

      <div className="px-4 pt-24 sm:pt-30 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
