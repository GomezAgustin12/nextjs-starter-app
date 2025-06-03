import * as React from "react";

export type TypographyProps<T extends React.ElementType = "p"> = {
  /**
   * The HTML element to render (e.g., 'h1', 'h2', 'p', 'span', etc.)
   * Defaults to 'p'.
   */
  as?: T;
  /**
   * The content to display inside the typography component.
   */
  children: React.ReactNode;
  /**
   * Additional class names for custom styling.
   */
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

/**
 * Typography base atom for consistent text rendering.
 */
export function Typography<T extends React.ElementType = "p">({
  as,
  children,
  className = "",
  ...rest
}: TypographyProps<T>) {
  const Component = as || "p";
  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
}

export default Typography;
