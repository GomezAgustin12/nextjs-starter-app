import { Product } from "@/types/product";

// Temporary mock data for demonstration
const products: Product[] = [
  {
    id: "1",
    title: "Auriculares Bluetooth Inalámbricos",
    image: "/mercado-libre.svg",
    price: 15999,
    currency: "$",
    rating: 4.5,
    stock: 12,
    inStock: true,
    discountPercentage: 20,
  },
  {
    id: "2",
    title: "Teclado Mecánico RGB",
    image: "/vercel.svg",
    price: 24999,
    currency: "$",
    rating: 4.8,
    stock: 8,
    inStock: true,
    discountPercentage: 10,
  },
  {
    id: "3",
    title: "Mouse Gamer Inalámbrico",
    image: "/next.svg",
    price: 8999,
    currency: "$",
    rating: 4.2,
    stock: 0,
    inStock: false,
    discountPercentage: 0,
  },
  {
    id: "4",
    title: "Monitor 27'' 144Hz",
    image: "/globe.svg",
    price: 79999,
    currency: "$",
    rating: 4.9,
    stock: 5,
    inStock: true,
    discountPercentage: 15,
  },
];

export const getProducts = (): Product[] => products;

export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);
