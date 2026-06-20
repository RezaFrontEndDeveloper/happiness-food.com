import { create } from "zustand";

const useBasketStore = create((set) => ({
  basket: [],

  addToBasket: (item) =>
    set((state) => ({
      basket: [...state.basket, item],
    })),

  deleteItem: (id) => {
    set((state) => ({
      basket: state.basket.filter((item) => item.id !== id),
    }));
  },
}));

export default useBasketStore;
