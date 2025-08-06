import { Card } from '@/components/ui/card';
import fruitsImage from '@/assets/fruits.jpg';
import snacksImage from '@/assets/snacks.jpg';
import dairyImage from '@/assets/dairy.jpg';
const categories = [
  {
    id: 'fruits and vegetables',
    name: 'Fruits and Vegetables',
    image: fruitsImage,
    color: 'from-red-400 to-pink-400',
  },
  {
    id: 'beverages',
    name: 'Beverages',
    color: 'from-green-400 to-emerald-400',
  },
  {
    id: 'snacks',
    name: 'Snacks',
    image: snacksImage,
    color: 'from-yellow-400 to-orange-400',
  },
  {
    id: 'dairy',
    name: 'Dairy',
    image: dairyImage,
    color: 'from-blue-400 to-cyan-400',
  },
  {
    id: 'personal care',
    name: 'Personal Care',
    color: 'from-blue-400 to-cyan-400',
  },
   {
    id: 'baby care',
    name: 'baby Care',
    color: 'from-blue-400 to-cyan-400',
  },
];

interface CategoryGridProps {
  onCategorySelect?: (categoryId: string) => void;
}

export const CategoryGrid = ({ onCategorySelect }: CategoryGridProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="cursor-pointer group hover:shadow-lg transition-all duration-300 overflow-hidden border-0 bg-gradient-to-br from-accent to-background"
            onClick={() => onCategorySelect?.(category.id)}
          >
            <div className="p-4 text-center">
              <div className="mb-3 mx-auto w-16 h-16 rounded-full overflow-hidden bg-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {category.name}
              </h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};