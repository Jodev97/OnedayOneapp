import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { useProductCacheStore } from '@/stores/productCacheStore';
import { fetchProducts } from '@/api/products';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/Button';
import { LoadingGrid } from '@/components/LoadingSkeleton';
import { showToast } from '@/lib/toast';

export const Route = createFileRoute('/')({
  component: ProductListingPage,
});

function ProductListingPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [displayedCount, setDisplayedCount] = useState(12);
  const [initialized, setInitialized] = useState(false);
  const [, forceUpdate] = useState({});

  useEffect(() => {
    if (initialized) return;

    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        await fetchProducts();
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to load products';
        setError(message);
        showToast(message, 'error');
      } finally {
        setLoading(false);
        setInitialized(true);
      }
    };

    loadProducts();
  }, [initialized]);

  // Subscribe to store changes
  useEffect(() => {
    return useProductCacheStore.subscribe(() => {
      forceUpdate({});
    });
  }, []);

  const products = Object.values(useProductCacheStore.getState().products);
  const categories = useProductCacheStore.getState().categories;

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const displayedProducts = filteredProducts.slice(0, displayedCount);
  const hasMore = displayedCount < filteredProducts.length;

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setDisplayedCount(12);
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setDisplayedCount(12);
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Loading State */}
      {loading && <LoadingGrid count={12} />}

      {/* Error State */}
      {error && (
        <div className="text-center py-12">
          <p className="text-red-600 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>Retry</Button>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && filteredProducts.length === 0 && (
        <div className="text-center py-12 text-gray-600">No products found</div>
      )}

      {/* Products Grid */}
      {!loading && !error && displayedProducts.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {hasMore && (
            <div className="text-center">
              <Button onClick={() => setDisplayedCount((prev) => prev + 12)}>
                Load More
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
