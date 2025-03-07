// src/app/home/HomeClient.js
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import HomeHeader from "./HomeHeader";
import { urlFor } from "@/lib/sanity";

export default function HomeClient({ rooms }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Funzione per aggiornare le slide visibili in base alla finestra
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3); // 3 slide su schermi grandi
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(2); // 2 slide su tablet
      } else {
        setSlidesPerView(1); // 1 slide su mobile
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? rooms.length - slidesPerView : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= rooms.length - slidesPerView ? 0 : prevIndex + 1
    );
  };

  return (
    <main className="max-w-6xl">
      <Navbar />
      <HomeHeader />
      <h2 className="text-3xl font-bold mb-6 px-4">Avaible Rooms</h2>

      {/* Slider container */}
      <div className="relative overflow-hidden px-4">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(100 / slidesPerView) * currentIndex}%)` }}
        >
          {rooms.map((room) => (
            <div
              key={room._id}
              className="p-4 flex-shrink-0"
              style={{ width: `${100 / slidesPerView}%` }}
            >
              <div className="border rounded-lg p-4 shadow-lg bg-white h-full flex flex-col">
                {room.thumbnail ? (
                  <Image
                    src={urlFor(room.thumbnail).width(400).url()}
                    alt={room.name}
                    width={400}
                    height={250}
                    className="rounded-lg w-full h-[250px] object-cover"
                  />
                ) : (
                  <div className="w-full h-[250px] bg-gray-200 flex items-center justify-center rounded-lg">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold mt-2">{room.name}</h2>
                    <p className="text-gray-600">{room.description}</p>
                  </div>
                  <p className="font-bold mt-2">{room.price} € / night</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigazione */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </main>
  );
}
