import React from "react";
import CommerceLayout from "@/components/templates/CommerceLayout";
import ProductCarousel from "@/components/organisms/ProductCarousel";
import ProductGrid from "@/components/organisms/ProductGrid";
import { getProducts } from "@/services/products";

const products = getProducts();

const Home = () => {
  return (
    <CommerceLayout>
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Bienvenido a Mercado Corrientes</h1>
        <p className="text-lg text-center text-gray-600 mb-8">Descubrí los mejores productos de tecnología, gaming y más.</p>
        <ProductGrid columns={3} products={products} />
      </section>
    </CommerceLayout>
  );
};

export default Home;
