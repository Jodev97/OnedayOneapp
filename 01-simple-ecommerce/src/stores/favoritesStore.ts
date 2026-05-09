import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesStore {
  favorites: number[];
  toggleFavorite: (productId: number) => void;
  isFavorited: (productId: number) => boolean;
  getFavoriteCount: () => number;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (productId: number) => {
        set((state) => {
          if (state.favorites.includes(productId)) {
            return { favorites: state.favorites.filter((id) => id !== productId) };
          }
          return { favorites: [...state.favorites, productId] };
        });
      },
      isFavorited: (productId: number) => get().favorites.includes(productId),
      getFavoriteCount: () => get().favorites.length,
    }),
    {
      name: 'favorites-store',
    }
  )
);
