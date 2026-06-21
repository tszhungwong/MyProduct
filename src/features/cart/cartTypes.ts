import { Product } from '@/features/products/productTypes';

export type CartItem = {
  id: string;
  product: Product;
  quantity: number;
};
