import React from "react";
import Typography from "@/components/atoms/Typography/Typography";

export interface PriceTagProps {
  price: number;
  currency?: string; // e.g. "$", "ARS", "USD"
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-2xl",
};

const PriceTag: React.FC<PriceTagProps> = ({
  price,
  currency = "$",
  className = "",
  size = "md",
}) => {
  // Format price with thousands separator, no decimals
  const formatted = price.toLocaleString("es-AR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return (
    <Typography
      as="span"
      className={`font-bold text-blue-600 ${sizeMap[size]} ${className}`}
      data-testid="price-tag"
    >
      {currency}
      {formatted}
    </Typography>
  );
};

export default PriceTag;
