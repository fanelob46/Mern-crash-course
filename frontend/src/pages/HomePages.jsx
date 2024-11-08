import React, { useEffect } from "react";
import { useProductStore } from "../store/product";
import ProductsCard from "../components/ProductsCard";

const HomePages = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);

  return (
    <div className="dark:text-white">
      <h1> Current Products 🚀</h1>
      <div className="grid grid-cols-3 py-10">
        {products.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePages;
