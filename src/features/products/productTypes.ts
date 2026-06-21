export type ProductCategory = 'All' | 'Fresh' | 'Pantry' | 'Home' | 'Popular';

export type Product = {
  id: string;
  name: string;
  category: Exclude<ProductCategory, 'All'>;
  description: string;
  price: number;
  sales: number;
  relatedScore: number;
  unit: string;
  imageUrl: string;
  badge?: string;
  stock: number;
};
