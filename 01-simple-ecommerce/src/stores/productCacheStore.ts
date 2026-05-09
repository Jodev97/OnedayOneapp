import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import type { Product } from '@/types/product';

interface ProductCacheStore {
  products: Record<number, Product>;
  categories: string[];
  setProducts: (products: Product[]) => void;
  getProduct: (id: number) => Product | undefined;
  setCategories: (categories: string[]) => void;
  getCategories: () => string[];
  getAllProducts: () => Product[];
}

export const useProductCacheStore = create<ProductCacheStore>()(
  subscribeWithSelector((set, get) => ({
    products: {},
    categories: [],
    setProducts: (products: Product[]) => {
      const record = products.reduce(
        (acc, product) => {
          acc[product.id] = product;
          return acc;
        },
        {} as Record<number, Product>
      );
      set({ products: record });
    },
    getProduct: (id: number) => get().products[id],
    setCategories: (categories: string[]) => set({ categories }),
    getCategories: () => get().categories,
    getAllProducts: () => Object.values(get().products),
  }))
);
