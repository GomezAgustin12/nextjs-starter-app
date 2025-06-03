import React from "react";
import type { ButtonHTMLAttributes, ReactElement } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement;
  "aria-label": string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  "aria-label": ariaLabel,
  ...props
}) => (
  <button
    type="button"
    aria-label={ariaLabel}
    {...props}
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "none",
      border: "none",
      padding: 8,
      borderRadius: "50%",
      cursor: "pointer",
      ...props.style,
    }}
  >
    {icon}
  </button>
);

export default IconButton;
