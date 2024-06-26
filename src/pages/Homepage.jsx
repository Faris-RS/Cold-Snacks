import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import products from "../assets/products.json";
import ProductCard from "../components/ProductCard";

export default function Homepage() {
  return (
    <>
      <Header />
      <Carousel />
      <div className="lg:px-20 px-10 mb-10 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 overflow-y-auto h-[75%]">
        {products.map((product) => {
          return (
            <ProductCard
              category={product.category}
              productImage={product.productImage}
              productName={product.productName}
              productPrice={product.productPrice}
              key={product.id}
            />
          );
        })}
      </div>
    </>
  );
}
