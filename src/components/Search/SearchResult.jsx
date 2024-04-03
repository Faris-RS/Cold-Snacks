import React from "react";
import ProductCard from "../ProductCard";
import searchStore from "../../store/SearchStore";

export default function SearchResult() {
  const { searchResults } = searchStore();

  return (
    <div className="lg:px-20 px-10 mb-10 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 overflow-y-auto h-[75%]">
      {searchResults.map((prod) => {
        return (
          <ProductCard
            key={prod.id}
            category={prod.category}
            productName={prod.productName}
            productImage={prod.productImage}
          />
        );
      })}
    </div>
  );
}
