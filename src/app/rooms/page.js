import client, { urlFor } from "@/lib/sanity";
import Image from "next/image";
import BookingForm from "../../components/BookingForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link"; 
async function getRooms() {
  const query = `*[_type == "room"]{
    _id,
    name,
    slug,
    description,
    price,
    images
  }`;
  return await client.fetch(query);
}

async function getSeoData(page) {
  const query = `*[_type == "seo" && page == $page][0]`;
  return await client.fetch(query, { page });
}

export async function generateMetadata() {
  const seoData = await getSeoData("/rooms");

  return {
    title: seoData?.title || "Titolo di Default",
    description: seoData?.description || "Descrizione di Default",
    openGraph: seoData?.image ? { images: [urlFor(seoData.image).url()] } : {},
  };
}

export default async function RoomsPage() {
  const rooms = await getRooms();

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 pt-20">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-800">
          Camere Disponibili
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {rooms.map((room) => (
  <Link
    key={room._id}
    href={`/rooms/${room.slug.current}`} // <-- usa lo slug dinamico
    className="border rounded-2xl p-6 shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 block"
  >
    {room.images?.[0] && (
      <Image
        src={urlFor(room.images[0]).width(500).url()}
        alt={room.name}
        width={500}
        height={300}
        className="rounded-xl object-cover w-full h-64"
      />
    )}
    <h2 className="text-2xl font-bold mt-4 text-gray-800">{room.name}</h2>
    <p className="text-gray-600 mt-2 line-clamp-3">{room.description}</p>
    <p className="font-bold mt-4 text-lg text-gray-900">
      {room.price} € / notte
    </p>
  </Link>
))}

        </div>
        <div className="mt-16">
          <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
            Prenota la tua stanza
          </h2>
          <div className="max-w-3xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}