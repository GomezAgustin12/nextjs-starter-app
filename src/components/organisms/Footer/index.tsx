import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 bg-gray-100 text-center text-gray-600 mt-8 border-t">
      <span>&copy; {new Date().getFullYear()} Mercado Corrientes. Todos los derechos reservados.</span>
    </footer>
  );
};

export default Footer;
