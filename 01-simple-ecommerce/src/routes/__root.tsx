import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Header } from '@/components/Header';
import { Toast } from '@/components/Toast';

function RootLayout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-gray-200 py-6 mt-8" role="contentinfo">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          © 2024 Simple E-commerce Store. All rights reserved.
        </div>
      </footer>
      <Toast />
    </div>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
});
