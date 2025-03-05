import client, { urlFor } from "@/lib/sanity";
import Image from "next/image";
import BookingForm from '../../components/BookingForm';

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
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Camere disponibili</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rooms.map((room) => (
          <div key={room._id} className="border rounded-lg p-4 shadow-lg bg-white">
            {room.images?.[0] && (
              <Image
                src={urlFor(room.images[0]).width(400).url()}
                alt={room.name}
                width={400}
                height={250}
                className="rounded-lg"
              />
            )}
            <h2 className="text-xl font-semibold mt-2">{room.name}</h2>
            <p className="text-gray-600">{room.description}</p>
            <p className="font-bold mt-2">{room.price} € / notte</p>
          </div>
        ))}
      </div>
      <BookingForm />
    </main>
  );
}
