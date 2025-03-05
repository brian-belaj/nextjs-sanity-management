export default{
    name: 'room',
    type: 'document',
    title: 'Camera',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Nome della Camera',
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        type: 'text',
        title: 'Descrizione della Camera',
        rows: 4
      },
      {
        name: 'images',
        type: 'array',
        title: 'Immagini della Camera',
        of: [{ type: 'image' }]
      },
      {
        name: 'price_per_night',
        type: 'number',
        title: 'Prezzo per Notte',
        validation: Rule => Rule.required().min(0)
      },
      {
        name: 'max_guests',
        type: 'number',
        title: 'Numero Massimo di Ospiti',
        validation: Rule => Rule.required().min(1)
      },
      {
        name: 'features',
        type: 'array',
        title: 'Caratteristiche della Camera',
        of: [{ type: 'string' }],
        options: {
          list: [
            { title: 'Bagno privato', value: 'private_bathroom' },
            { title: 'Balcone', value: 'balcony' },
            { title: 'TV', value: 'tv' },
            { title: 'Frigo', value: 'fridge' },
            { title: 'Vista mare', value: 'sea_view' }
          ]
        }
      }
    ]
  }