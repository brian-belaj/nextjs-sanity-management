import client, { urlFor } from "@/lib/sanity";
import Image from "next/image";
import BookingForm from "../../components/BookingForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      <main className="max-w-6xl mx-auto px-6 pt-20">
        <h1 className="text-4xl font-bold mb-8 text-center">Camere disponibili</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room._id} className="border rounded-xl p-6 shadow-xl bg-white">
              {room.images?.[0] && (
                <Image
                  src={urlFor(room.images[0]).width(500).url()}
                  alt={room.name}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                />
              )}
              <h2 className="text-2xl font-semibold mt-4 text-black">{room.name}</h2>
              <p className="text-black mt-2">{room.description}</p>
              <p className="font-bold mt-4 text-lg text-black">{room.price} € / notte</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-6">Prenota la tua stanza</h2>
          <BookingForm />
        </div>
        
      </main>
      <div className="mt-12">
          <Footer />
        </div>
    </>
  );
}