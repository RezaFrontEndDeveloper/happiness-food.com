import { create } from "zustand";
import { persist } from "zustand/middleware";

const useBasketStore = create(
  persist(
    (set) => ({
      basket: [],

      addToBasket: (item) =>
        set((state) => ({
          basket: [...state.basket, item],
        })),

      deleteItem: (id) =>
        set((state) => ({
          basket: state.basket.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "basket",
      partialize: (state) => ({
        basket: state.basket,
      }),
    }
  )
);

export default useBasketStore;
