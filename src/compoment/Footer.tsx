import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 w-[1200px]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Exclusive - Subscribe */}
        <div>
          <h2 className="text-lg font-semibold">Exclusive</h2>
          <p className="mt-2">Subscribe</p>
          <p className="text-gray-400 text-sm">Get 10% off your first order</p>
          <div className="mt-3 flex items-center border border-gray-600 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-white px-3 py-2 outline-none w-full"
            />
            <button className="bg-white text-black px-3 py-2">➤</button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-semibold">Support</h2>
          <p className="text-gray-400 text-sm mt-2">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-gray-400 text-sm mt-1">exclusive@gmail.com</p>
          <p className="text-gray-400 text-sm mt-1">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h2 className="text-lg font-semibold">Account</h2>
          <ul className="text-gray-400 text-sm mt-2 space-y-1">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h2 className="text-lg font-semibold">Quick Link</h2>
          <ul className="text-gray-400 text-sm mt-2 space-y-1">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h2 className="text-lg font-semibold">Download App</h2>
          <p className="text-gray-400 text-sm mt-2">Save $3 with App New User Only</p>
          <div className="mt-2 flex space-x-2">
            <img src="/google-play.png" alt="Google Play" className="w-24" />
            <img src="/app-store.png" alt="App Store" className="w-24" />
          </div>
          {/* Social Icons */}
          <div className="mt-4 flex space-x-4">
            <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" />
            <FaTwitter className="text-gray-400 hover:text-white cursor-pointer" />
            <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" />
            <FaLinkedinIn className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
