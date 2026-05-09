import { useCartStore } from '@/stores/cartStore';
import type { CartItem as CartItemType, Product } from '@/types/product';

interface CartItemProps {
  item: {
    product: Product;
    cartItem: CartItemType;
  };
}

export function CartItem({ item }: CartItemProps) {
  const { product, cartItem } = item;
  const { updateQuantity, removeFromCart } = useCartStore((state) => ({
    updateQuantity: state.updateQuantity,
    removeFromCart: state.removeFromCart,
  }));

  const itemTotal = product.price * cartItem.quantity;

  return (
    <div className="flex gap-3 pb-4 border-b">
      <img
        src={product.image}
        alt={product.title}
        className="w-16 h-16 object-contain bg-gray-100 rounded"
      />
      <div className="flex-1">
        <h4 className="font-semibold text-sm line-clamp-2">{product.title}</h4>
        <p className="text-gray-600 text-sm">${product.price.toFixed(2)} each</p>
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
            className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-8 text-center">{cartItem.quantity}</span>
          <button
            onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
            className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100"
            aria-label="Increase quantity"
          >
            +
          </button>
          <span className="ml-auto font-semibold">${itemTotal.toFixed(2)}</span>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(product.id)}
        className="text-red-500 hover:text-red-700 text-sm"
        aria-label="Remove from cart"
      >
        Remove
      </button>
    </div>
  );
}
