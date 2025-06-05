import React from "react";

export interface StockBadgeProps {
  inStock: boolean;
  quantity?: number;
  className?: string;
}

const StockBadge: React.FC<StockBadgeProps> = ({ inStock, quantity, className = "" }) => {
  if (!inStock) {
    return (
      <span className={`inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm ${className}`} data-testid="stock-badge">
        Sin stock
      </span>
    );
  }
  return (
    <span className={`inline-block bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm ${className}`} data-testid="stock-badge">
      {quantity !== undefined ? `Stock: ${quantity}` : "En stock"}
    </span>
  );
};

export default StockBadge;
