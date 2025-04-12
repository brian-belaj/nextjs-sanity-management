"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeHeader from "./HomeHeader";
import { urlFor } from "@/lib/sanity";
import Link from "next/link"; // Importa il componente Link

export default function HomeClient({ rooms }) {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3); // 3 stanze su schermi grandi
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(2); // 2 stanze su tablet
      } else {
        setSlidesPerView(1); // 1 stanza su mobile
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  return (
    <main className="max-w-8xl mx-auto">
      <Navbar />
      <HomeHeader />
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-6 px-4">Available Rooms</h2>

        {/* Grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {rooms.map((room) => (
            <Link key={room._id} href={`/rooms/${room.slug.current}`} passHref>
  <div className="bg-white border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
    <div className="flex flex-col justify-between mt-4">
      <div>
        <h2 className="text-xl font-semibold text-black">{room.name}</h2>
        <p className="text-gray-600 mt-2">{room.description}</p>
      </div>
      <p className="font-bold text-lg mt-2 text-black">{room.price} € / night</p>
    </div>
  </div>
</Link>

          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
