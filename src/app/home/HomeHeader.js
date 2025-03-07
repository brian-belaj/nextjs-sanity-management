import Image from "next/image";
import imageHero from "/public/hotel.webp";
export default function HomeHeader() {
  return (
    <header className="max-w-6xl mx-auto px-10 pt-10 py-12 px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
   
      <div>
        <h1 className="text-4xl font-bold text-white-900 mb-4">Welcome to our Hotel</h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover our elegant and comfortable rooms for an unforgettable stay.
        </p>
        <a
          href="/rooms"
          className="inline-block bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Discover the rooms
        </a>
      </div>

      <div className="flex justify-center">
        <Image
          src={imageHero}
          alt="Camera d'albergo elegante"
          width={500}
          height={350}
          className="rounded-lg shadow-lg"
        />
      </div>
    </header>
  );
}
