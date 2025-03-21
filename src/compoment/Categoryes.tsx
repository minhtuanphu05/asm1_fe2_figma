import React, { useState } from "react";
import { Phone, Monitor, Camera, Headphones, Gamepad2 } from "lucide-react";

const categories = [
  { name: "Phones", icon: <Phone size={32} /> },
  { name: "Computers", icon: <Monitor size={32} /> },
  { name: "Camera", icon: <Camera size={32} /> },
  { name: "HeadPhones", icon: <Headphones size={32} /> },
  { name: "Gaming", icon: <Gamepad2 size={32} /> },
];

const Categoryes: React.FC = () => {
  const [selected, setSelected] = useState("Camera");

  return (
    <div className="p-6 mt-7 ">
      {/* Tiêu đề */}
      <div className="flex items-center space-x-2">
        <div className="w-2 h-6 bg-red-500 rounded-md"></div>
        <h2 className="text-red-500 font-semibold ">Categories</h2>
      </div>
      <h1 className="text-2xl font-bold mt-2">Browse By Category</h1>

      {/* Danh mục sản phẩm */}
      <div className="mt-6 flex items-center space-x-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`flex flex-col items-center p-[75px] border rounded-lg cursor-pointer transition ${
              selected === category.name ? "bg-red-500 text-white" : "hover:bg-gray-100"
            }`}
            onClick={() => setSelected(category.name)}
          >
            {category.icon}
            <p className="mt-2 font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categoryes;
