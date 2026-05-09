const API_BASE_URL = 'https://fakestoreapi.com';

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

async function fetchJson<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new ApiError(response.status, `HTTP ${response.status}: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(0, `Network error: ${error instanceof Error ? error.message : String(error)}`);
  }
}

export const api = {
  getProducts: () =>
    fetchJson<Array<{ id: number; title: string; price: number; description: string; category: string; image: string; rating?: { rate: number; count: number } }>>(
      `${API_BASE_URL}/products`
    ),

  getProductById: (id: number) =>
    fetchJson<{ id: number; title: string; price: number; description: string; category: string; image: string; rating?: { rate: number; count: number } }>(
      `${API_BASE_URL}/products/${id}`
    ),

  getCategories: () => fetchJson<string[]>(`${API_BASE_URL}/products/categories`),

  getProductsByCategory: (category: string) =>
    fetchJson<Array<{ id: number; title: string; price: number; description: string; category: string; image: string; rating?: { rate: number; count: number } }>>(
      `${API_BASE_URL}/products/category/${category}`
    ),
};
