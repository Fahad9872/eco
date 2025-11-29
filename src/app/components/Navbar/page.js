"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1700px] mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-5xl font-extrabold text-black transition-transform duration-300 hover:scale-110">
            Eco<span className="text-amber-500">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-black font-semibold">
          {["Home", "About", "Contact"].map((item) => (
            <li key={item} className="relative group text-2xl cursor-pointer">
              <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                {item}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-black transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <div className="hidden md:block">
          <button className="text-lg font-bold text-black border border-black px-4 py-2 rounded-xl shadow-md hover:bg-black cursor-pointer hover:text-white transition-all duration-300">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-max-height duration-500 ${
          menuOpen ? "max-h-60" : "max-h-0"
        } bg-white`}
      >
        <ul className="flex flex-col gap-4 text-black font-semibold px-6 py-4">
          {["Home", "Available Foods", "About", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.replace(" ", "")}`}
                onClick={() => setMenuOpen(false)}
                className="block py-2 hover:text-amber-500 transition"
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <button className="w-full text-center text-black border border-black py-2 rounded-xl font-bold shadow-md hover:bg-amber-500 hover:text-white transition-all duration-300">
              Login
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
