import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const FloatingCart = () => {
  const { state } = useCart();
  const navigate = useNavigate();

  if (state.itemCount === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Button
        variant="cart"
        size="lg"
        className="rounded-full shadow-lg"
        onClick={() => navigate('/cart')}
      >
        <div className="relative">
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {state.itemCount}
          </span>
        </div>
        <span className="ml-2">Nu.{state.total}</span>
      </Button>
    </div>
  );
};