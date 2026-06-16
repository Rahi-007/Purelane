import Tittle from "./Tittle";
import products from "../../data/product.json";
import ProductCard from "../product/ProductCard";

const BestBuy = () => {
  const selectedIds = [1, 7, 8, 10];
  return (
    <div className="bg-[#edeae4] py-8">
      <div className=" mx-auto max-w-7xl">
        <Tittle title="Best Buy" />
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {products
            .filter((product) => selectedIds.includes(product.id))
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BestBuy;
