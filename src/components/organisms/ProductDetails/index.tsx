import React from "react";
import { Product } from "@/types/product";
import ProductImage from "@/components/atoms/ProductImage";
import ProductInfo from "@/components/molecules/ProductInfo";

interface ProductDetailsProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  onAddToCart,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <ProductImage
        src={product.image}
        alt={product.title}
        width={500}
        height={500}
        className="mx-auto"
        priority
      />
      <ProductInfo
        product={product}
        onAddToCart={onAddToCart}
        className="flex-1"
      />
    </div>
  );
};

export default ProductDetails;
