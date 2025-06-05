import Link, { LinkProps } from "next/link";
import React from "react";

interface NavLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: LinkProps["href"];
  children: React.ReactNode;
  className?: string;
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, children, className = "", ...props }, ref) => (
    <Link href={href} legacyBehavior>
      <a ref={ref} className={className} {...props}>
        {children}
      </a>
    </Link>
  ),
);

NavLink.displayName = "NavLink";

export default NavLink;
