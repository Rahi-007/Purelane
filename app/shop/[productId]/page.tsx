import { notFound } from "next/navigation";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import products from "../../../data/product.json";
import ProductGallery from "@/components/product/ProductGallery";
import ProductDetails from "@/components/product/ProductDetails";
import Navbar from "@/components/common/Navbar";
import Tabs, { Product } from "@/components/product/Tabs";

interface PageProps {
  params: Promise<{
    productId: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { productId } = await params;

  const typedProducts = products as Product[];

  const product = typedProducts.find(
    (item) => item.id.toString() === productId
  );

  if (!product) {
    notFound();
  }

  return (
    <div>
      <Header />
      <Navbar gap={true} />

      <div className="max-w-7xl mx-auto p-2 sm:p-4 mt-16 mb-10 sm:mt-30">
        <div className="grid sm:grid-cols-2 gap-4 pb-8">
          <ProductGallery product={product} />
          <ProductDetails product={product} />
        </div>

        <Tabs product={product} />
      </div>

      <Footer />
    </div>
  );
}