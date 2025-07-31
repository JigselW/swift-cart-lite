import { Search, ShoppingCart, MapPin } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  onSearch?: (query: string) => void;
  searchQuery?: string;
}

export const Header = ({ onSearch, searchQuery = '' }: HeaderProps) => {
  const { state } = useCart();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border/40 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 font-bold text-xl text-primary"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-hover rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            Druk-Drop
          </button>

          {/* Delivery Location */}
          <div className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Deliver to <strong>Home</strong></span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for products..."
                className="pl-10 rounded-full border-2 border-primary/20 focus:border-primary"
                value={searchQuery}
                onChange={(e) => onSearch?.(e.target.value)}
              />
            </div>
          </div>

          {/* Cart Button */}
          <Button
            variant="outline"
            className="relative rounded-full p-2"
            onClick={() => navigate('/cart')}
          >
            <ShoppingCart className="w-5 h-5" />
            {state.itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {state.itemCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};