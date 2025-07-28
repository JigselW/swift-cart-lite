export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  unit: string;
  weight: string;
  originalPrice?: number;
}

export const products: Product[] = [
  // Fruits
  {
    id: '1',
    name: 'Fresh Bananas',
    price: 49,
    originalPrice: 65,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400',
    category: 'fruits',
    unit: 'dozen',
    weight: '1 dozen (12 pieces)'
  },
  {
    id: '2',
    name: 'Red Apples',
    price: 149,
    originalPrice: 180,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400',
    category: 'fruits',
    unit: 'kg',
    weight: '1 kg'
  },
  {
    id: '3',
    name: 'Fresh Oranges',
    price: 79,
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400',
    category: 'fruits',
    unit: 'kg',
    weight: '1 kg'
  },
  {
    id: '4',
    name: 'Green Grapes',
    price: 89,
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400',
    category: 'fruits',
    unit: 'kg',
    weight: '500g'
  },

  // Vegetables
  {
    id: '5',
    name: 'Fresh Tomatoes',
    price: 35,
    originalPrice: 45,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400',
    category: 'vegetables',
    unit: 'kg',
    weight: '1 kg'
  },
  {
    id: '6',
    name: 'Onions',
    price: 25,
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400',
    category: 'vegetables',
    unit: 'kg',
    weight: '1 kg'
  },
  {
    id: '7',
    name: 'Fresh Carrots',
    price: 45,
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400',
    category: 'vegetables',
    unit: 'kg',
    weight: '500g'
  },
  {
    id: '8',
    name: 'Green Capsicum',
    price: 55,
    image: 'https://images.unsplash.com/photo-1563565375-f3c8de2dbaaa?w=400',
    category: 'vegetables',
    unit: 'kg',
    weight: '500g'
  },

  // Snacks
  {
    id: '9',
    name: 'Lays Classic Chips',
    price: 20,
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400',
    category: 'snacks',
    unit: 'pack',
    weight: '25g'
  },
  {
    id: '10',
    name: 'Oreo Cookies',
    price: 35,
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400',
    category: 'snacks',
    unit: 'pack',
    weight: '150g'
  },
  {
    id: '11',
    name: 'Mixed Nuts',
    price: 299,
    originalPrice: 350,
    image: 'https://images.unsplash.com/photo-1599909393507-47e551bc3b94?w=400',
    category: 'snacks',
    unit: 'pack',
    weight: '200g'
  },
  {
    id: '12',
    name: 'Popcorn',
    price: 45,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    category: 'snacks',
    unit: 'pack',
    weight: '100g'
  },

  // Dairy
  {
    id: '13',
    name: 'Fresh Milk',
    price: 65,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400',
    category: 'dairy',
    unit: 'liter',
    weight: '1 liter'
  },
  {
    id: '14',
    name: 'Greek Yogurt',
    price: 85,
    originalPrice: 95,
    image: 'https://images.unsplash.com/photo-1582543442905-6681fe8ba0c6?w=400',
    category: 'dairy',
    unit: 'cup',
    weight: '400g'
  },
  {
    id: '15',
    name: 'Cheese Slice',
    price: 129,
    image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=400',
    category: 'dairy',
    unit: 'pack',
    weight: '200g'
  },
  {
    id: '16',
    name: 'Butter',
    price: 179,
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400',
    category: 'dairy',
    unit: 'pack',
    weight: '500g'
  },
];