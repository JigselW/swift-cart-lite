import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { CategoryGrid } from '@/components/CategoryGrid';
import { ProductGrid } from '@/components/ProductGrid';
import { FloatingCart } from '@/components/FloatingCart';
import { Button } from '@/components/ui/button';
import { products, Product } from '@/data/products';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory]);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent/30 to-background">
      <Header onSearch={setSearchQuery} searchQuery={searchQuery} />
      
      <main className="container mx-auto px-4 py-6 space-y-8">
        {/* Hero Section */}
        <div className="text-center py-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent mb-4">
            Fresh Groceries
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Delivered fresh to your doorstep in minutes
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>✨ 10 min delivery</span>
            <span>🚚 Free delivery above ₹199</span>
            <span>💰 Best prices</span>
          </div>
        </div>

        {/* Category Grid */}
        {!selectedCategory && !searchQuery && (
          <CategoryGrid onCategorySelect={handleCategorySelect} />
        )}

        {/* Filter Header */}
        {(selectedCategory || searchQuery) && (
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                {selectedCategory 
                  ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}` 
                  : 'Search Results'
                }
              </h2>
              {searchQuery && (
                <p className="text-muted-foreground">
                  {filteredProducts.length} results for "{searchQuery}"
                </p>
              )}
            </div>
            <Button variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* Products Grid */}
        <div className="space-y-4">
          {(!selectedCategory && !searchQuery) && (
            <h2 className="text-2xl font-bold text-foreground">All Products</h2>
          )}
          <ProductGrid products={filteredProducts} />
        </div>
      </main>

      <FloatingCart />
    </div>
  );
};

export default Index;
