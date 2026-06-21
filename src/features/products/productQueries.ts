import { products } from './mockProducts';

export function getProductById(productId: string) {
  return products.find((product) => product.id === productId);
}
