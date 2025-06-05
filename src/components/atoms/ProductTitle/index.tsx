import React from "react";

export interface ProductTitleProps {
  title: string;
  className?: string;
}

const ProductTitle: React.FC<ProductTitleProps> = ({ title, className = "" }) => {
  return (
    <h2 className={`text-lg font-semibold truncate ${className}`}>{title}</h2>
  );
};

export default ProductTitle;
