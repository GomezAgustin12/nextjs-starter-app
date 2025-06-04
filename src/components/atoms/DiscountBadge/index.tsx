import React from "react";
import Typography from "@/components/atoms/Typography/Typography";

export interface DiscountBadgeProps {
  discountPercentage: number;
  className?: string;
}

const DiscountBadge: React.FC<DiscountBadgeProps> = ({
  discountPercentage,
  className = "",
}) => {
  if (!discountPercentage || discountPercentage <= 0) return null;
  return (
    <span
      className={`inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm ${className}`}
      data-testid="discount-badge"
    >
      <Typography as="span" className="font-bold">
        -{discountPercentage}% OFF
      </Typography>
    </span>
  );
};

export default DiscountBadge;
