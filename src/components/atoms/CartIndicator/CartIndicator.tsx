import React from "react";
import IconButton from "@/components/atoms/IconButton/IconButton";

// Simple useLocalStorage hook for cart
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = React.useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    setStoredValue(value);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  };

  return [storedValue, setValue];
}

const CartIcon = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path
      d="M3 3h2l.4 2M7 13h10l4-8H5.4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="21" r="1" fill="currentColor" />
    <circle cx="19" cy="21" r="1" fill="currentColor" />
  </svg>
);

const CartIndicator: React.FC = () => {
  // Define a minimal cart item type
  type CartItem = { id: string; quantity: number };
  const [cart] = useLocalStorage<CartItem[]>("cart", []);
  const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <IconButton icon={<CartIcon />} aria-label="Cart" />
      {count > 0 && (
        <span
          style={{
            position: "absolute",
            top: 2,
            right: 2,
            background: "#ef4444",
            color: "white",
            borderRadius: "999px",
            padding: "0 6px",
            fontSize: 12,
            fontWeight: 700,
            minWidth: 18,
            textAlign: "center",
            lineHeight: "18px",
            height: 18,
            display: "inline-block",
          }}
        >
          {count}
        </span>
      )}
    </div>
  );
};

export default CartIndicator;
