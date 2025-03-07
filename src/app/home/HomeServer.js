// src/app/home/HomeServer.js
import HomeClient from "./HomeClient";
import client, { urlFor } from "@/lib/sanity";

async function getRooms() {
  const query = `*[_type == "room"]{
    _id,
    name,
    slug,
    description,
    price,
    thumbnail,
    images
  }`;
  return await client.fetch(query);
}

export default async function HomeServer() {
  const rooms = await getRooms();
  return <HomeClient rooms={rooms} />;
}
