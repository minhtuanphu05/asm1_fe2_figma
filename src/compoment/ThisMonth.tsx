import React from "react";
import { Heart, Eye } from "lucide-react";
import img1 from "../img/g04.jpg"
import img2 from "../img/g276.jpg"
import img3 from "../img/g207.jpg"
import img4 from "../img/g233.jpg"
const products = [
  {
    name: "The north coat",
    image: img1,
    price: 260,
    oldPrice: 360,
    rating: 4.5,
    reviews: 65,
  },
  {
    name: "Gucci duffle bag",
    image:img2,
    price: 960,
    oldPrice: 1160,
    rating: 4.8,
    reviews: 65,
  },
  {
    name: "RGB liquid CPU Cooler",
    image: img3,
    price: 160,
    oldPrice: 170,
    rating: 4.6,
    reviews: 65,
  },
  {
    name: "Small BookShelf",
    image: img4,
    price: 360,
    oldPrice: 0,
    rating: 4.7,
    reviews: 65,
  },
];

const ThisMonth: React.FC = () => {
  return (
    <div className="p-6">
      {/* Tiêu đề */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-6 bg-red-500 rounded-md"></div>
          <h2 className="text-red-500 font-semibold">This Month</h2>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">View All</button>
      </div>
      <h1 className="text-2xl font-bold mt-2">Best Selling Products</h1>

      {/* Danh sách sản phẩm */}
      <div className="mt-6 grid grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="relative border p-4 rounded-lg bg-white shadow-sm hover:shadow-md">
            {/* Hình ảnh sản phẩm */}
            <img src={product.image} alt={product.name} className="w-full h-40 object-contain" />

            {/* Icon Yêu thích & Xem chi tiết */}
            <div className="absolute top-4 right-4 space-y-2">
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <Heart size={16} className="text-gray-500" />
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <Eye size={16} className="text-gray-500" />
              </button>
            </div>

            {/* Tên sản phẩm */}
            <h3 className="mt-4 font-semibold">{product.name}</h3>

            {/* Giá sản phẩm */}
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-red-500 font-semibold">${product.price}</span>
              {product.oldPrice > 0 && (
                <span className="text-gray-400 line-through">${product.oldPrice}</span>
              )}
            </div>

            {/* Đánh giá */}
            <div className="flex items-center space-x-1 mt-1">
              <span className="text-yellow-500">⭐️⭐️⭐️⭐️⭐️</span>
              <span className="text-gray-400 text-sm">({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[1200px] h-auto mt-[50px]">
        <img className="mx-auto w-[900px] h-[400px] object-cover" src="https://cdn.tgdd.vn/Products/Images/2162/327367/Slider/vi-vn-loa-bluetooth-alpha-works-aw-ride-thumbvideo.jpg" alt="" />
      </div>
    </div>
  );
};

export default ThisMonth;
