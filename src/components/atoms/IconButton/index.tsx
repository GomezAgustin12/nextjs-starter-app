import React from "react";
import type { ButtonHTMLAttributes, ReactElement } from "react";
import { useTheme } from "@/theme";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement;
  "aria-label": string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  "aria-label": ariaLabel,
  ...props
}) => {
  const { theme } = useTheme();
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      {...props}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: theme === "dark" ? "#222" : "none",
        border: "none",
        padding: 8,
        borderRadius: "50%",
        cursor: "pointer",
        color: theme === "dark" ? "#ededed" : "#171717",
        ...props.style,
      }}
    >
      {icon}
    </button>
  );
};

export default IconButton;
