import React from "react";
import ProductCard from "@/components/molecules/ProductCard";
import { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[];
  columns?: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, columns = 4 }) => {
  return (
    <div
      className={`grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${columns}`}
      data-testid="product-grid"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
