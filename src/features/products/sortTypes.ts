export type SortOption =
  | 'default'
  | 'price-desc'
  | 'price-asc'
  | 'sales-desc'
  | 'sales-asc'
  | 'related-desc'
  | 'related-asc';

export const sortLabels: Record<SortOption, string> = {
  default: 'Default',
  'price-desc': 'Price high to low',
  'price-asc': 'Price low to high',
  'sales-desc': 'Sales high to low',
  'sales-asc': 'Sales low to high',
  'related-desc': 'Related high to low',
  'related-asc': 'Related low to high',
};
