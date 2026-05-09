import { Link } from '@tanstack/react-router';
import { Button } from './Button';
import { useFavoritesStore } from '@/stores/favoritesStore';
import { useCartStore } from '@/stores/cartStore';
import { showToast } from '@/lib/toast';
import type { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const isFavorited = useFavoritesStore((state) => state.isFavorited(product.id));
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product.id, 1);
    showToast(`Added "${product.title}" to cart`, 'success');
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product.id);
    const message = isFavorited ? 'Removed from favorites' : 'Added to favorites';
    showToast(message, 'success');
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/product/${product.id}`}>
        <div className="h-48 bg-gray-100 overflow-hidden flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain p-4"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link
          to={`/product/${product.id}`}
          className="hover:text-blue-600 transition-colors"
        >
          <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2 text-sm">
            {product.title}
          </h3>
        </Link>

        <p className="text-2xl font-bold text-gray-900 mb-4">${product.price.toFixed(2)}</p>

        <div className="flex gap-2">
          <Button size="sm" variant="primary" onClick={handleAddToCart} className="flex-1">
            Add to Cart
          </Button>
          <button
            onClick={handleToggleFavorite}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
          >
            <span className={`text-2xl ${isFavorited ? 'text-red-500' : 'text-gray-300'}`}>
              ♥
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
