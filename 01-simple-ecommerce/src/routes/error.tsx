import { useRouterState, Link } from '@tanstack/react-router';
import { Button } from '@/components/Button';

export function ErrorPage() {
  const routerState = useRouterState();
  const error = routerState.pendingLocation
    ? 'Page not found'
    : routerState.errorComponent || 'An error occurred';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
