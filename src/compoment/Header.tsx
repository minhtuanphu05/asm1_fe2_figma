import React from "react";
import { Search, Heart, ShoppingCart } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      {/* Logo */}
      <h1 className="text-2xl font-bold">Exclusive</h1>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6 text-gray-700">
        <a href="#" className="font-medium hover:underline">Home</a>
        <a href="#" className="hover:text-gray-900">Contact</a>
        <a href="#" className="hover:text-gray-900">About</a>
        <a href="#" className="hover:text-gray-900">Sign Up</a>
      </nav>

      {/* Search + Icons */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="border rounded-md px-4 py-2 w-48 md:w-64 focus:outline-none"
          />
          <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />
        </div>
        <Heart className="w-6 h-6 cursor-pointer" />
        <ShoppingCart className="w-6 h-6 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
