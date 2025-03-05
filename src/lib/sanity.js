import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Configura il client Sanity
const client = createClient({
  projectId: "3mvzzclb", 
  dataset: "production",
  apiVersion: "2023-01-01",
  token: 'skaEovujuIzqbg4uS51DoaXviYLW7B2oJbX0PqBQhYHy8hWNlWgVQ1IC4aDGvKunfSyJ4V3obM01PlNZQtoHwWUN4y6srXnGUMkrUf1TPxGJ1DOW4QXDoUUPctRPibQ9RsT3VjXaDVCYLSl0tgwizLP4eVi5A575aOMKRSXcXv4EaL1CTFBG',
  useCdn: false,
});

// Funzione per generare URL delle immagini
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
