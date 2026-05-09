import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Header } from '@/components/Header';
import { Toast } from '@/components/Toast';

function RootLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Toast />
    </div>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
});
