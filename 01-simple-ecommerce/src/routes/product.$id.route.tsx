import { createFileRoute, useParams, Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { fetchProduct } from '@/api/products';
import { useProductCacheStore } from '@/stores/productCacheStore';
import { useCartStore } from '@/stores/cartStore';
import { useFavoritesStore } from '@/stores/favoritesStore';
import { Button } from '@/components/Button';
import { showToast } from '@/lib/toast';

export const Route = createFileRoute('/product/$id')({
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { id } = useParams({ from: '/product/$id' });
  const productId = parseInt(id, 10);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const product = useProductCacheStore((state) => state.getProduct(productId));
  const isFavorited = useFavoritesStore((state) => state.isFavorited(productId));
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        await fetchProduct(productId);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to load product';
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    if (!product) {
      loadProduct();
    } else {
      setLoading(false);
    }
  }, [productId, product]);

  if (loading) {
    return <div className="text-center py-12">Loading product...</div>;
  }

  if (error || !product) {
    return <div className="text-center py-12 text-red-600">{error || 'Product not found'}</div>;
  }

  const handleAddToCart = () => {
    addToCart(productId, quantity);
    showToast(`Added ${quantity} to cart`, 'success');
    setQuantity(1);
  };

  const handleToggleFavorite = () => {
    toggleFavorite(productId);
    const message = isFavorited ? 'Removed from favorites' : 'Added to favorites';
    showToast(message, 'success');
  };

  return (
    <div>
      <Link to="/" className="inline-flex items-center gap-2 mb-6 text-blue-600 hover:text-blue-800">
        ← Back to Products
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="flex items-center justify-center bg-gray-100 rounded-lg p-8">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-96 object-contain"
          />
        </div>

      {/* Product Info */}
      <div>
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2">{product.category}</p>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          {product.rating && (
            <p className="text-sm text-gray-600">
              Rating: {product.rating.rate} ★ ({product.rating.count} reviews)
            </p>
          )}
        </div>

        <p className="text-4xl font-bold text-blue-600 mb-6">${product.price.toFixed(2)}</p>

        <p className="text-gray-700 mb-8 leading-relaxed">{product.description}</p>

        {/* Actions */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <label className="font-semibold">Quantity:</label>
            <div className="flex items-center border border-gray-300 rounded">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 hover:bg-gray-100"
              >
                −
              </button>
              <span className="px-4 py-2 border-l border-r border-gray-300">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(10, quantity + 1))}
                className="px-3 py-2 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <Button onClick={handleAddToCart} size="lg" className="flex-1">
              Add to Cart
            </Button>
            <button
              onClick={handleToggleFavorite}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                isFavorited
                  ? 'bg-red-100 text-red-600 hover:bg-red-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isFavorited ? '❤️ Favorited' : '🤍 Favorite'}
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
