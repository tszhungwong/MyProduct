import { products } from '@/features/products/mockProducts';

import { CartItem } from './cartTypes';

export const preservedCartItems: CartItem[] = [
  {
    id: 'cart-organic-tomatoes',
    product: products[0],
    quantity: 2,
  },
  {
    id: 'cart-cold-pressed-juice',
    product: products[1],
    quantity: 3,
  },
  {
    id: 'cart-olive-oil',
    product: products[2],
    quantity: 1,
  },
];

export function getCartSubtotal(items: CartItem[]) {
  return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
}
