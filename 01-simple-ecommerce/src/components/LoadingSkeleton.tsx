export function ProductCardSkeleton() {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="aspect-square bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
        <div className="h-6 bg-gray-200 rounded animate-pulse w-1/3 mt-4" />
        <div className="flex gap-2 mt-4">
          <div className="h-10 bg-blue-200 rounded flex-1 animate-pulse" />
          <div className="h-10 bg-gray-200 rounded w-12 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function LoadingGrid({ count = 12 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
