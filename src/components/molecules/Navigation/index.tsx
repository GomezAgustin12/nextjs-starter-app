import React from "react";
import NavLink from "../../atoms/NavLink";
import CartIndicator from "../../atoms/CartIndicator";

const Navigation: React.FC = () => {
  return (
    <div className="container mx-auto flex items-center justify-between">
      <ul className="flex gap-6 items-center">
        <li>
          <NavLink
            href="/perfil"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
          >
            Perfil
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/mis-compras"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
          >
            Mis Compras
          </NavLink>
        </li>
        <li>
          <CartIndicator />
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
