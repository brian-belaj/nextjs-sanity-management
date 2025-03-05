import {RocketIcon} from '@sanity/icons'
import { HomeIcon } from '@sanity/icons';
export default {
    name: "seo",
    title: "SEO",
    type: "document",
    icon: RocketIcon,
    fields: [
      {
        name: "page",
        title: "Pagina",
        type: "string",
        description: "Inserisci l'URL della pagina senza dominio, es: '/home' o '/camere'",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "title",
        title: "Meta Title",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "description",
        title: "Meta Description",
        type: "text",
        validation: (Rule) => Rule.required().max(160),
      },
      {
        name: "keywords",
        title: "Meta Keywords",
        type: "array",
        of: [{ type: "string" }],
        options: {
          layout: "tags",
        },
      },
      {
        name: "image",
        title: "Meta Image",
        type: "image",
        description: "Immagine per la condivisione sui social (Open Graph)",
      },
    ],
  };
  