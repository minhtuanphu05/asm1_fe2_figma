import React from "react";
import { FaShippingFast, FaHeadset, FaUndo } from "react-icons/fa";

const footerItems = [
  {
    icon: <FaShippingFast className="text-white text-3xl" />,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: <FaHeadset className="text-white text-3xl" />,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: <FaUndo className="text-white text-3xl" />,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

const C3footer: React.FC = () => {
  return (
    <div className="py-12 flex justify-center gap-12">
      {footerItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          {/* Icon với viền tròn */}
          <div className="w-20 h-20 flex items-center justify-center bg-black rounded-full relative">
            <div className="w-24 h-24 bg-gray-300 rounded-full absolute -z-10"></div>
            {item.icon}
          </div>

          {/* Nội dung */}
          <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default C3footer;
