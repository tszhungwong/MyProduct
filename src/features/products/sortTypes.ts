export type SortOption =
  | 'price-desc'
  | 'price-asc'
  | 'sales-desc'
  | 'sales-asc'
  | 'related-desc'
  | 'related-asc';

export const sortLabels: Record<SortOption, string> = {
  'price-desc': 'Price high to low',
  'price-asc': 'Price low to high',
  'sales-desc': 'Sales high to low',
  'sales-asc': 'Sales low to high',
  'related-desc': 'Related high to low',
  'related-asc': 'Related low to high',
};
