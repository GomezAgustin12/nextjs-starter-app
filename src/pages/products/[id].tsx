import React from "react";
import { useRouter } from "next/router";
import CommerceLayout from "@/components/templates/CommerceLayout";
import ProductDetails from "@/components/organisms/ProductDetails";
import { getProductById } from "@/services/products";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = typeof id === "string" ? getProductById(id) : undefined;

  if (!product) {
    return (
      <CommerceLayout>
        <p className="text-center py-10">Producto no encontrado.</p>
      </CommerceLayout>
    );
  }

  return (
    <CommerceLayout>
      <ProductDetails product={product} />
    </CommerceLayout>
  );
};

export default ProductPage;
