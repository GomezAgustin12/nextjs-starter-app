import React from "react";
import { Product } from "@/types/product";
import ProductImage from "@/components/atoms/ProductImage";
import ProductTitle from "@/components/atoms/ProductTitle";
import PriceTag from "@/components/atoms/PriceTag";
import RatingStars from "@/components/atoms/RatingStars";
import StockBadge from "@/components/atoms/StockBadge";
import DiscountBadge from "@/components/atoms/DiscountBadge";
import AddToCartButton from "@/components/atoms/AddToCartButton";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  loading?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, loading }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-3 relative group hover:shadow-lg transition-shadow">
      {/* Discount badge */}
      {product.discountPercentage && product.discountPercentage > 0 && (
        <div className="absolute top-3 left-3 z-10">
          <DiscountBadge discountPercentage={product.discountPercentage} />
        </div>
      )}
      {/* Product image */}
      <ProductImage src={product.image} alt={product.title} className="mx-auto" width={200} height={200} />
      {/* Title */}
      <ProductTitle title={product.title} className="mt-2 mb-1 text-center" />
      {/* Price and stock */}
      <div className="flex items-center justify-between mt-1">
        <PriceTag price={product.price} currency={product.currency} size="md" />
        <StockBadge inStock={product.inStock} quantity={product.stock} />
      </div>
      {/* Rating */}
      {typeof product.rating === "number" && (
        <div className="flex justify-center mt-1">
          <RatingStars rating={product.rating} />
        </div>
      )}
      {/* Add to cart button */}
      <AddToCartButton
        onClick={() => onAddToCart && onAddToCart(product)}
        disabled={!product.inStock}
        loading={loading}
        text={product.inStock ? "Agregar al carrito" : "Sin stock"}
      />
    </div>
  );
};

export default ProductCard;
