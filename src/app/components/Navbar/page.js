"use client";
import { useState } from "react";
import {
  FaSearch,
  FaHeart,
  FaShoppingBag,
  FaBars,
  FaHeadphones,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b">
      {/* --- Top Section --- */}
      <div className="flex justify-between items-center px-6 py-3 ">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl  font-extrabold text-gray-900">
            ECO<span className="text-red-600">.</span>
          </span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-10 max-w-2xl border rounded-sm overflow-hidden">
          <input
            type="text"
            placeholder="Search Products"
            className="flex-grow px-4 py-2 outline-none text-sm"
          />
          <select className="border-l px-3 text-gray-600 text-sm outline-none">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home</option>
          </select>
          <button className="bg-black text-white px-4">
            <FaSearch />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-5">
          <a href="#" className="text-sm hover:text-red-600">
            Login / SignUp
          </a>
          <FaHeart className="text-xl text-gray-600 cursor-pointer hover:text-red-600" />
          <div className="relative cursor-pointer">
            <FaShoppingBag className="text-xl text-gray-600 hover:text-red-600" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 rounded-full">
              01
            </span>
          </div>
        </div>
      </div>

      {/* --- Bottom Navigation --- */}
      <nav className="flex items-center justify-between px-6 py-2 bg-gray-50 text-sm font-medium">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center bg-red-600 text-white px-3 py-2 rounded-sm"
          >
            <FaBars className="mr-2" /> All Departments
          </button>
        </div>

        {/* Menu Links */}
        <ul className="flex items-center space-x-6 text-gray-800">
          <li className="text-red-600 font-semibold cursor-pointer">HOME</li>
          <li className="hover:text-red-600 cursor-pointer">ABOUT</li>
          <li className="hover:text-red-600 cursor-pointer">SHOP</li>
          <li className="hover:text-red-600 cursor-pointer">PAGES</li>
          <li className="hover:text-red-600 cursor-pointer">BLOG</li>
          <li className="hover:text-red-600 cursor-pointer">CONTACT</li>
        </ul>

        {/* Call Info */}
        <div className="flex items-center space-x-2 text-sm">
          <FaHeadphones className="text-red-600 text-lg" />
          <div>
            <p className="text-gray-500 text-xs">CALL US 24/7</p>
            <p className="text-red-600 font-semibold text-sm">
              +00 123 456 789
            </p>
          </div>
        </div>
      </nav>

      <p className="font-integral">font-integral</p>
    </header>
  );
}
