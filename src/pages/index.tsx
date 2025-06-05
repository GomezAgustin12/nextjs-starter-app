import React from "react";
import CommerceLayout from "@/components/templates/CommerceLayout";
import ProductCarousel from "@/components/organisms/ProductCarousel";
import ProductGrid from "@/components/organisms/ProductGrid";

const mockProducts = [
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

const Home = () => {
  return (
    <CommerceLayout>
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Bienvenido a Mercado Corrientes</h1>
        <p className="text-lg text-center text-gray-600 mb-8">Descubrí los mejores productos de tecnología, gaming y más.</p>
        <ProductGrid columns={3} products={mockProducts} />
      </section>
    </CommerceLayout>
  );
};

export default Home;
