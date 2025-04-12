// src/app/page.js

import HomeClient from './home/HomeClient';
import client from '@/lib/sanity';

async function getRooms() {
  const query = `*[_type == "room"]{
    _id,
    name,
    slug,
    description,
    price,
    thumbnail
  }`;
  return await client.fetch(query);
}

export default async function HomePage() {
  const rooms = await getRooms();

  return <HomeClient rooms={rooms} />;
}
