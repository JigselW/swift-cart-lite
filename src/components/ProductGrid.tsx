import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Minus, Plus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/data/products';
import { useToast } from '@/hooks/use-toast';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  const { state, dispatch } = useCart();
  const { toast } = useToast();
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const getItemQuantity = (productId: string) => {
    const cartItem = state.items.find(item => item.id === productId);
    return cartItem?.quantity || 0;
  };

  const updateQuantity = (productId: string, change: number) => {
    const currentQty = getItemQuantity(productId);
    const newQty = Math.max(0, currentQty + change);
    
    if (newQty === 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: productId });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity: newQty } });
    }
  };

  const addToCart = (product: Product) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
      },
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No products found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => {
        const cartQuantity = getItemQuantity(product.id);
        const hasDiscount = product.originalPrice && product.originalPrice > product.price;
        const discountPercentage = hasDiscount 
          ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
          : 0;

        return (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group border-border/50">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {hasDiscount && (
                <Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground">
                  {discountPercentage}% OFF
                </Badge>
              )}
            </div>
            
            <div className="p-3 space-y-3">
              <div>
                <h3 className="font-semibold text-sm text-foreground line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-xs text-muted-foreground">{product.weight}</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-foreground">Nu.{product.price}</span>
                {hasDiscount && (
                  <span className="text-sm text-muted-foreground line-through">
                    Nu.{product.originalPrice}
                  </span>
                )}
              </div>

              {cartQuantity === 0 ? (
                <Button
                  size="sm"
                  variant="cart"
                  className="w-full text-xs"
                  onClick={() => addToCart(product)}
                >
                  ADD TO CART
                </Button>
              ) : (
                <div className="flex items-center justify-between bg-primary rounded-lg p-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 w-8 p-0 text-white hover:bg-white/20"
                    onClick={() => updateQuantity(product.id, -1)}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-white font-semibold px-2">{cartQuantity}</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 w-8 p-0 text-white hover:bg-white/20"
                    onClick={() => updateQuantity(product.id, 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
};