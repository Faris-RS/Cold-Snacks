import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import searchStore from "../../store/SearchStore";
import products from "../../assets/products.json";

export default function Search() {
  const { setIsSearchShown, setSearchResults, searchKeyword } = searchStore();

  const handleCloseSearch = () => {
    setIsSearchShown(false);
  };

  useEffect(() => {
    if (searchKeyword) {
      const filtered = products.filter((product) =>
        product.productName.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults(products);
    }
  }, []);

  return (
    <div className="w-screen h-screen bg-blue-100 absolute z-40 opacity-95 px-5 py-5 overflow-hidden">
      <button
        onClick={handleCloseSearch}
        className="absolute top-0 right-0 m-4 py-5 px-8 text-lg border-2 text-green-500 hover:text-white border-green-500 hover:bg-green-500 duration-300 ease-in-out rounded-xl"
      >
        X
      </button>
      <SearchBar />
      <div className="mt-10 h-[95%]">
        <SearchResult />
      </div>
    </div>
  );
}
