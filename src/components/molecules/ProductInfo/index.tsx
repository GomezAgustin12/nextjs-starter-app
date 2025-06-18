import React from "react";
import { Product } from "@/types/product";
import ProductTitle from "@/components/atoms/ProductTitle";
import PriceTag from "@/components/atoms/PriceTag";
import RatingStars from "@/components/atoms/RatingStars";
import StockBadge from "@/components/atoms/StockBadge";
import DiscountBadge from "@/components/atoms/DiscountBadge";
import AddToCartButton from "@/components/atoms/AddToCartButton";

interface ProductInfoProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  className?: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  product,
  onAddToCart,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <ProductTitle title={product.title} className="text-2xl" />
      <div className="flex items-center gap-3">
        <PriceTag
          price={product.price}
          currency={product.currency}
          size="lg"
        />
        {product.discountPercentage && product.discountPercentage > 0 && (
          <DiscountBadge discountPercentage={product.discountPercentage} />
        )}
      </div>
      <div className="flex items-center gap-3">
        <StockBadge inStock={product.inStock} quantity={product.stock} />
        {typeof product.rating === "number" && (
          <RatingStars rating={product.rating} />
        )}
      </div>
      <AddToCartButton
        onClick={() => onAddToCart && onAddToCart(product)}
        disabled={!product.inStock}
        text={product.inStock ? "Agregar al carrito" : "Sin stock"}
      />
    </div>
  );
};

export default ProductInfo;
