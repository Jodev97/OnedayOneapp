import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { useCartStore } from '@/stores/cartStore';
import { useEnrichedCartItems, useCartTotal } from '@/stores/selectors';
import { useProductCacheStore } from '@/stores/productCacheStore';
import { Button } from '@/components/Button';
import { showToast } from '@/lib/toast';

export const Route = createFileRoute('/checkout')({
  component: CheckoutPage,
});

function CheckoutPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const enrichedItems = useEnrichedCartItems();
  const total = useCartTotal();
  const getProduct = useProductCacheStore((state) => state.getProduct);

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto py-12 text-center">
        <div className="text-6xl mb-4">✓</div>
        <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your order has been confirmed.
        </p>
        <Link to="/" className="text-blue-600 hover:underline">
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-lg mx-auto py-12 text-center">
        <p className="text-gray-600 mb-6">Your cart is empty</p>
        <Link to="/">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Order placed successfully!', 'success');
    clearCart();
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2">
        <h1 className="text-2xl font-bold mb-6">Order Summary</h1>

        <div className="space-y-4 mb-8">
          {enrichedItems.map((item) => (
            <div
              key={item.product.id}
              className="flex gap-4 border border-gray-200 rounded-lg p-4"
            >
              <img
                src={item.product.image}
                alt={item.product.title}
                className="w-20 h-20 object-contain"
              />

              <div className="flex-1">
                <h3 className="font-semibold mb-1">{item.product.title}</h3>
                <p className="text-gray-600 text-sm mb-3">${item.product.price.toFixed(2)} each</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-gray-300 rounded">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="px-2 py-1 hover:bg-gray-100"
                    >
                      −
                    </button>
                    <span className="px-3 py-1 border-l border-r border-gray-300">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="px-2 py-1 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-600 text-sm hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Checkout Form */}
      <div>
        <div className="border border-gray-200 rounded-lg p-6 sticky top-4">
          {/* Summary */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Order Total</h2>
            <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <textarea
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <Button type="submit" className="w-full">
              Complete Purchase
            </Button>

            <Link to="/">
              <Button variant="secondary" className="w-full">
                Continue Shopping
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
