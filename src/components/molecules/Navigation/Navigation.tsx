import Link from "next/link";
import React from "react";
import { Button } from "../../atoms/Button/Button";
import Typography from "../../atoms/Typography/Typography";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

const Navigation: React.FC = () => {
  return (
    <nav className="w-full border-b border-gray-200 py-4 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <Typography as="span" className="text-xl font-bold text-blue-700">
          MyApp
        </Typography>
        <ul className="flex gap-6 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} legacyBehavior>
                <a className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
          <li>
            <Button variant="primary">Sign In</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
