import client, { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

async function getRoomDetails(slug) {
  const query = `*[_type == "room" && slug.current == $slug][0]{
    _id,
    name,
    description,
    price,
    images,
    features
  }`;
  return await client.fetch(query, { slug });
}

// Metadata per la pagina
export async function generateMetadata({ params }) {
  const room = await getRoomDetails(params.slug);

  return {
    title: room?.name || "Camera",
    description: room?.description || "Dettagli della camera",
    openGraph: room?.images?.[0]
      ? { images: [urlFor(room.images[0]).url()] }
      : {},
  };
}

// Componente principale per la pagina della stanza
export default async function RoomDetailPage({ params }) {
  const room = await getRoomDetails(params.slug);

  if (!room) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Camera non trovata
        </h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 pt-20">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-800">
          {room.name}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            {room.images?.[0] && (
              <Image
                src={urlFor(room.images[0]).width(600).url()}
                alt={room.name}
                width={600}
                height={400}
                className="rounded-xl object-cover w-full"
              />
            )}
          </div>
          <div>
            <p className="text-lg text-gray-700 mb-4">{room.description}</p>
            <p className="font-bold text-2xl text-gray-900">
              {room.price} € / notte
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">Caratteristiche:</h3>
              <ul className="list-disc pl-5 mt-2">
                {room.features?.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
