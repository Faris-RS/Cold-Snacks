import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import products from "../assets/products.json";
import categories from "../assets/categories.json";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import Chip from "../components/Chip";

export default function Homepage() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleChipClick = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredProducts =
    selectedCategories.length > 0
      ? products.filter((product) =>
          selectedCategories.includes(product.category)
        )
      : products;

  return (
    <>
      <Header />
      {/* <Hero /> */}
      <Carousel />
      <div className="flex w-full justify-start md:px-40 py-5 overflow-x-auto">
        {categories.map((cat) => {
          return (
            <Chip
              key={cat.category}
              value={cat.category}
              selected={selectedCategories.includes(cat.category)}
              onClick={() => handleChipClick(cat.category)}
            />
          );
        })}
      </div>
      <div className="lg:px-20 px-10 mb-10 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 overflow-y-auto h-[75%]">
        {filteredProducts.map((product) => {
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
