import React from "react";

type AddToCartButtonProps = {
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
  text?: string;
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  onClick,
  loading = false,
  disabled = false,
  text = "Add to Cart",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      {loading ? "Adding..." : text}
    </button>
  );
};

export default AddToCartButton;
