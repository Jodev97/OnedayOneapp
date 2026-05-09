import { createFileRoute, Link } from '@tanstack/react-router';
import { useFavoritesStore } from '@/stores/favoritesStore';
import { useProductCacheStore } from '@/stores/productCacheStore';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/Button';

export const Route = createFileRoute('/favorites')({
  component: FavoritesPage,
});

function FavoritesPage() {
  const favorites = useFavoritesStore((state) => state.favorites);
  const getProduct = useProductCacheStore((state) => state.getProduct);

  const favoriteProducts = favorites
    .map((id) => getProduct(id))
    .filter((product) => product !== undefined);

  if (favoriteProducts.length === 0) {
    return (
      <div className="max-w-lg mx-auto py-12 text-center">
        <p className="text-gray-600 mb-6">You haven't added any favorites yet</p>
        <Link to="/">
          <Button>Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Favorites</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {favoriteProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
