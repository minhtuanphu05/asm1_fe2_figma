import React, { useState } from "react";
import { Heart, Eye } from "lucide-react";

const products = [
  {
    name: "Breed Dry Dog Food",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY9pTKjDGoXzy9Q1SUuS-AE2YPugFSqCMIw&s",
    price: 100,
    rating: 3,
    reviews: 35,
    isNew: false,
  },
  {
    name: "CANON EOS DSLR Camera",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY9pTKjDGoXzy9Q1SUuS-AE2YPugFSqCMIw&s",
    price: 360,
    rating: 4.5,
    reviews: 95,
    isNew: false,
  },
  {
    name: "ASUS FHD Gaming Laptop",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY9pTKjDGoXzy9Q1SUuS-AE2YPugFSqCMIw&s",
    price: 700,
    rating: 5,
    reviews: 325,
    isNew: false,
  },
  {
    name: "Curology Product Set",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY9pTKjDGoXzy9Q1SUuS-AE2YPugFSqCMIw&s",
    price: 500,
    rating: 4,
    reviews: 145,
    isNew: false,
  },
  {
    name: "Kids Electric Car",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY9pTKjDGoXzy9Q1SUuS-AE2YPugFSqCMIw&s",
    price: 960,
    rating: 5,
    reviews: 65,
    isNew: true,
  },
  {
    name: "Jr. Zoom Soccer Cleats",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY9pTKjDGoXzy9Q1SUuS-AE2YPugFSqCMIw&s",
    price: 1160,
    rating: 5,
    reviews: 35,
    isNew: false,
  },
  {
    name: "GP11 Shooter USB Gamepad",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY9pTKjDGoXzy9Q1SUuS-AE2YPugFSqCMIw&s",
    price: 660,
    rating: 5,
    reviews: 55,
    isNew: true,
  },
  {
    name: "Quilted Satin Jacket",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY9pTKjDGoXzy9Q1SUuS-AE2YPugFSqCMIw&s",
    price: 660,
    rating: 4.5,
    reviews: 55,
    isNew: false,
  },
];

const Home: React.FC = () => {
  // Trạng thái để kiểm tra hover sản phẩm nào
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="p-6">
      {/* Tiêu đề */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-6 bg-red-500 rounded-md"></div>
          <h2 className="text-red-500 font-semibold">Our Products</h2>
        </div>
      </div>
      <h1 className="text-2xl font-bold mt-2">Explore Our Products</h1>

      {/* Danh sách sản phẩm */}
      <div className="mt-6 grid grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative border p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
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

            {/* Nhãn NEW */}
            {product.isNew && (
              <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 text-xs rounded-md">
                NEW
              </div>
            )}

            {/* Tên sản phẩm */}
            <h3 className="mt-4 font-semibold">{product.name}</h3>

            {/* Giá sản phẩm */}
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-red-500 font-semibold">${product.price}</span>
            </div>

            {/* Đánh giá */}
            <div className="flex items-center space-x-1 mt-1">
              <span className="text-yellow-500">
                {"⭐".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </span>
              <span className="text-gray-400 text-sm">({product.reviews})</span>
            </div>

            {/* Nút Add to Cart - chỉ hiển thị khi hover */}
            {hoveredIndex === index && (
              <button className="bg-black text-white py-2 mt-2 w-full rounded-md absolute bottom-0 left-0 right-0 opacity-100 transition-opacity">
                Add To Cart
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Nút View All */}
      <div className="flex justify-center mt-6">
        <button className="bg-red-500 text-white px-6 py-2 rounded-md">View All Products</button>
      </div>
    </div>
  );
};

export default Home;
