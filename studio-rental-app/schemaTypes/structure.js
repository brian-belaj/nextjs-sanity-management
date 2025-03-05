import { HomeIcon } from "@sanity/icons"

export default {
  name: 'structure',
  type: 'document',
  title: 'Struttura',
  icon: HomeIcon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nome della Struttura',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      type: 'text',
      title: 'Descrizione della Struttura',
      rows: 4
    },
    {
      name: 'address',
      type: 'string',
      title: 'Indirizzo'
    },
    {
      name: 'images',
      type: 'array',
      title: 'Immagini della Struttura',
      of: [{ type: 'image' }]
    },
    {
      name: 'rooms',
      type: 'array',
      title: 'Camere',
      of: [{ type: 'reference', to: [{ type: 'room' }] }]
    },
    {
      name: 'services',
      type: 'array',
      title: 'Servizi offerti',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Wi-Fi', value: 'wifi' },
          { title: 'Colazione inclusa', value: 'breakfast' },
          { title: 'Parcheggio', value: 'parking' },
          { title: 'Aria condizionata', value: 'air_conditioning' },
          { title: 'Piscina', value: 'pool' }
        ]
      }
    }
  ]
}