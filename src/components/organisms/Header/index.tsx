import React, { useState } from "react";
import BrandBar from "@/components/atoms/BrandBar/BrandBar";
import SearchInput from "@/components/atoms/SearchInput/SearchInput";
import Navigation from "@/components/molecules/Navigation/Navigation";

const Header: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-3 px-4">
        {/* BrandBar */}
        <div className="flex items-center gap-2 min-w-max">
          <BrandBar />
        </div>
        {/* SearchBar */}
        <div className="flex-1 flex justify-center w-full max-w-xl">
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar productos, marcas y más..."
            className="w-full"
          />
        </div>
        {/* Navigation */}
        <div className="flex items-center min-w-max">
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
