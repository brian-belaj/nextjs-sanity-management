"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Logo & Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Booking App</h2>
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
          <Link href="/rooms" className="text-gray-400 hover:text-white">Rooms</Link>
          <Link href="/about" className="text-gray-400 hover:text-white">About</Link>
          <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.instagram.com/brianbelaj/" className="text-gray-400 hover:text-white"><Instagram size={24} /></a>
          <a href="https://x.com/BelajBrian" className="text-gray-400 hover:text-white"><Twitter size={24} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;