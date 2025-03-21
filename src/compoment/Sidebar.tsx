import React from "react";
import { ChevronRight } from "lucide-react";

const categories = [
  "Woman’s Fashion",
  "Men’s Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby’s & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:block w-64 border-r p-4">
      <ul className="space-y-6">
        {categories.map((category, index) => (
          <li key={index} className="flex justify-between items-center text-gray-700 cursor-pointer hover:text-black transition">
            {category}
            {index < 2 && <ChevronRight className="w-4 h-4 text-gray-500" />}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
