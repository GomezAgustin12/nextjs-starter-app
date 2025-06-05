import React from "react";
import Image from "next/image";

export interface ProductImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  width = 320,
  height = 320,
  className = "",
  priority = false,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-contain rounded-lg bg-gray-100 ${className}`}
      priority={priority}
      style={{ maxWidth: "100%", height: "auto" }}
    />
  );
};

export default ProductImage;
