"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icone

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          Booking App
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-black">Home</Link>
          <Link href="/rooms" className="text-gray-700 hover:text-black">Rooms</Link>
          <Link href="/about" className="text-gray-700 hover:text-black">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-black">Contact</Link>
        </div>

        {/* Menu Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <Link href="/" className="block text-center py-2 text-gray-700">Home</Link>
          <Link href="/rooms" className="block text-center py-2 text-gray-700">Rooms</Link>
          <Link href="/about" className="block text-center py-2 text-gray-700">About</Link>
          <Link href="/contact" className="block text-center py-2 text-gray-700">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
