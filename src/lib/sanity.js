import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Configura il client Sanity
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-01-01",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});

// Funzione per generare URL delle immagini
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
