import { create } from "zustand";

const searchStore = create((set) => ({
  isSearchShown: false,
  setIsSearchShown: (x) => set({ isSearchShown: x }),

  searchKeyword: "",
  setSearchKeyword: (x) => set({ searchKeyword: x }),

  searchResults: [],
  setSearchResults: (x) => set({ searchResults: x }),
}));

export default searchStore;
