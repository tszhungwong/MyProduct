import { Product, ProductCategory } from './productTypes';

export const categories: ProductCategory[] = ['All', 'Fresh', 'Pantry', 'Home', 'Popular'];

export const featuredProduct: Product = {
  id: 'featured-basket',
  name: 'Weekend Market Basket',
  category: 'Popular',
  description: 'A ready-to-pack bundle with customer favorites for fast ordering.',
  price: 36,
  sales: 180,
  relatedScore: 92,
  unit: 'bundle',
  imageUrl:
    'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
  badge: 'Best seller',
  stock: 12,
};

export const products: Product[] = [
  {
    id: 'organic-tomatoes',
    name: 'Organic Tomatoes',
    category: 'Fresh',
    description: 'Bright, firm tomatoes for salads and sauces.',
    price: 4.5,
    sales: 240,
    relatedScore: 82,
    unit: 'lb',
    imageUrl:
      'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=700&q=80',
    badge: 'Fresh',
    stock: 28,
  },
  {
    id: 'cold-pressed-juice',
    name: 'Cold Pressed Juice',
    category: 'Popular',
    description: 'Small batch juice with citrus, carrot, and ginger.',
    price: 6.75,
    sales: 210,
    relatedScore: 88,
    unit: 'bottle',
    imageUrl:
      'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=700&q=80',
    stock: 18,
  },
  {
    id: 'olive-oil',
    name: 'Extra Virgin Olive Oil',
    category: 'Pantry',
    description: 'Smooth everyday oil for cooking and finishing.',
    price: 18,
    sales: 95,
    relatedScore: 76,
    unit: '500 ml',
    imageUrl:
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=700&q=80',
    badge: 'New',
    stock: 9,
  },
  {
    id: 'linen-towels',
    name: 'Linen Kitchen Towels',
    category: 'Home',
    description: 'Durable towels for daily kitchen use.',
    price: 14,
    sales: 66,
    relatedScore: 60,
    unit: 'set',
    imageUrl:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=700&q=80',
    stock: 15,
  },
];
