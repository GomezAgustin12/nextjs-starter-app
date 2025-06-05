import React from "react";
import { useTheme } from "@/theme";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const { theme } = useTheme();
  const baseStyles =
    "px-4 py-2 rounded font-semibold focus:outline-none transition-colors duration-200";
  const variantStyles = {
    primary:
      theme === "dark"
        ? "bg-blue-600 text-white hover:bg-blue-700"
        : "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      theme === "dark"
        ? "bg-gray-700 text-gray-100 hover:bg-gray-600"
        : "bg-gray-200 text-gray-900 hover:bg-gray-300",
    danger:
      theme === "dark"
        ? "bg-red-700 text-white hover:bg-red-800"
        : "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
