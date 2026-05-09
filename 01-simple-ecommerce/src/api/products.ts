import { api, ApiError } from './client';
import { useProductCacheStore } from '@/stores/productCacheStore';
import type { Product } from '@/types/product';

let productsCache: Product[] | null = null;
let categoriesCache: string[] | null = null;

export async function fetchProducts(): Promise<Product[]> {
  if (productsCache) {
    return productsCache;
  }

  try {
    const products = await api.getProducts();
    productsCache = products as Product[];
    useProductCacheStore.getState().setProducts(productsCache);
    return productsCache;
  } catch (error) {
    if (error instanceof ApiError) {
      throw new Error(`Failed to fetch products: ${error.message}`);
    }
    throw error;
  }
}

export async function fetchProduct(id: number): Promise<Product> {
  try {
    const cachedProduct = useProductCacheStore.getState().getProduct(id);
    if (cachedProduct) {
      return cachedProduct;
    }

    const product = await api.getProductById(id);
    useProductCacheStore.getState().setProducts([product as Product]);
    return product as Product;
  } catch (error) {
    if (error instanceof ApiError) {
      throw new Error(`Failed to fetch product: ${error.message}`);
    }
    throw error;
  }
}

export async function fetchCategories(): Promise<string[]> {
  if (categoriesCache) {
    return categoriesCache;
  }

  try {
    const categories = await api.getCategories();
    categoriesCache = categories;
    useProductCacheStore.getState().setCategories(categories);
    return categories;
  } catch (error) {
    if (error instanceof ApiError) {
      throw new Error(`Failed to fetch categories: ${error.message}`);
    }
    throw error;
  }
}

export function clearCache() {
  productsCache = null;
  categoriesCache = null;
}
