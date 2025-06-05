import React from "react";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

interface CommerceLayoutProps {
  children: React.ReactNode;
}

const CommerceLayout: React.FC<CommerceLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default CommerceLayout;
