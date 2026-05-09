import { Link } from '@tanstack/react-router';
import { useCartItemCount } from '@/stores/selectors';
import { useFavoritesStore } from '@/stores/favoritesStore';

export function Header() {
  const itemCount = useCartItemCount();
  const favoriteCount = useFavoritesStore((state) => state.getFavoriteCount());

  return (
    <header className="bg-white border-b border-gray-200" role="banner">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
          Store
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Products
          </Link>
          <Link
            to="/favorites"
            className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
          >
            Favorites
            {favoriteCount > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {favoriteCount}
              </span>
            )}
          </Link>
          <Link
            to="/checkout"
            className="relative text-gray-600 hover:text-gray-900 transition-colors"
          >
            Cart
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}
