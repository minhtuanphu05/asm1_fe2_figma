import React from "react";
import img1 from "../img/a471.jpg"
import img2 from "../img/a468n.jpg"
import img3 from "../img/a474.jpg"
import img4 from "../img/a480.jpg"
import img5 from "../img/g291.jpg"
import img6 from "../img/img6.png"
const featuredItems = [
  {
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    image:img1,
    large: true,
  },
  {
    title: "Women's Collections",
    description: "Featured woman collections that give you another vibe.",
    image: img5,
    large: false,
  },
//   {
//     title: "Speakers",
//     description: "Amazon wireless speakers",
//     image: img3,
//     large: false,
//   },
  {
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP",
    image: img6,
    large: false,
  },
];

const Featured: React.FC = () => {
  return (
    <div className="p-6 ">
      {/* Tiêu đề */}
      <div className="flex items-center space-x-2">
        <div className="w-2 h-6 bg-red-500 rounded-md"></div>
        <h2 className="text-red-500 font-semibold">Featured</h2>
      </div>
      <h1 className="text-2xl font-bold mt-2">New Arrival</h1>

      {/* Grid hiển thị sản phẩm */}
      <div className="mt-6 grid grid-cols-3 gap-4 h-[700px]">
        {featuredItems.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-lg overflow-hidden ${
              item.large ? "col-span-2 row-span-2" : "col-span-1"
            }`}
          >
            {/* Hình ảnh */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />

            {/* Overlay text */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
              <button className="mt-2 text-sm font-medium underline">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
