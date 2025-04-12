// components/HomeHeader.js
"use client";

import Image from "next/image";
import imageHero from "/public/img/hero.webp";

export default function HomeHeader() {
  return (
    <div className="relative h-screen">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${imageHero.src})`,
        }}
      ></div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 animate-fadeIn">
          Welcome to our Hotel
        </h1>
        <p
          className="text-lg md:text-xl text-white max-w-2xl mb-8 animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          Discover our elegant and comfortable rooms for an unforgettable stay.
        </p>
        <div
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeIn"
          style={{ animationDelay: "0.4s" }}
        >
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-lg shadow-md transition"
            onClick={() =>
              document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book Your Stay
          </button>
          <button
            className="border border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 rounded-lg transition"
            onClick={() =>
              document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Rooms
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}
