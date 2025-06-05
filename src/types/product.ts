export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  currency?: string;
  rating?: number;
  stock?: number;
  inStock: boolean;
  discountPercentage?: number;
  // Add more fields as needed
}
