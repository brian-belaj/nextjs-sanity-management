"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Chiudi il menu se si clicca fuori
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".mobile-menu") && !event.target.closest(".menu-button")) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

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
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden menu-button text-black">
          {isOpen ? <X size={28} className="text-black" /> : <Menu size={28} className="text-black" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg p-6 flex flex-col items-center md:hidden mobile-menu"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-black">
              <X size={28} className="text-black" />
            </button>
            <Link href="/" className="block py-3 text-gray-700 text-lg">Home</Link>
            <Link href="/rooms" className="block py-3 text-gray-700 text-lg">Rooms</Link>
            <Link href="/about" className="block py-3 text-gray-700 text-lg">About</Link>
            <Link href="/contact" className="block py-3 text-gray-700 text-lg">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;