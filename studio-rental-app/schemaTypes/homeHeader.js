export default {
    name: "homeHeader",
    title: "Header Home Page",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Titolo",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "subtitle",
        title: "Sottotitolo",
        type: "text",
      },
      {
        name: "ctaText",
        title: "Testo Pulsante CTA",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "ctaLink",
        title: "Link Pulsante CTA",
        type: "url",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "image",
        title: "Immagine di Sfondo",
        type: "image",
        options: { hotspot: true },
      },
    ],
  };
  