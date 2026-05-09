import { useMemo } from 'react';
import { useCartStore } from './cartStore';
import { useFavoritesStore } from './favoritesStore';
import { useProductCacheStore } from './productCacheStore';
import type { CartItem as CartItemType } from '@/types/product';

export const useCartTotal = () => {
  const items = useCartStore((state) => state.items);
  const products = useProductCacheStore((s) => s.products);

  return useMemo(() => {
    return items.reduce((total, item) => {
      const product = products[item.productId];
      return total + (product?.price ?? 0) * item.quantity;
    }, 0);
  }, [items, products]);
};

export const useCartItemCount = () => {
  return useCartStore((state) => state.getItemCount());
};

export const useEnrichedCartItems = () => {
  const items = useCartStore((state) => state.items);
  const products = useProductCacheStore((s) => s.products);

  return useMemo(() => {
    return items
      .map((item) => {
        const product = products[item.productId];
        if (!product) return null;
        return {
          product,
          quantity: item.quantity,
        } as CartItemType;
      })
      .filter((item): item is CartItemType => item !== null);
  }, [items, products]);
};

export const useFavoriteCount = () => {
  return useFavoritesStore((state) => state.getFavoriteCount());
};
