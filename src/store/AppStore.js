import { create } from "zustand";

const AppStore = create((set) => ({
  isLoading: true,
  setIsLoading: (x) => set({ isLoading: x }),
}));

export default AppStore;
