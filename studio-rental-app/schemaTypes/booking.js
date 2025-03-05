import {CalendarIcon} from '@sanity/icons'

export default {
    name: 'booking',
    title: 'Prenotazione',
    type: 'document',
    icon: CalendarIcon,
    fields: [
        {
            name: 'name',
            title: 'Nome',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'phone',
            title: 'Telefono',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'checkIn',
            title: 'Check-in',
            type: 'date',
            validation: Rule => Rule.required(),
        },
        {
            name: 'checkOut',
            title: 'Check-out',
            type: 'date',
            validation: Rule => Rule.required(),
        },
        {
            name: 'room',
            title: 'Camera',
            type: 'reference',
            to: { type: 'room' },
            validation: Rule => Rule.required(),
        },
        {
            name: 'status',
            title: 'Stato',
            type: 'string',
            options: {
                list: [
                    { title: 'Prenotato', value: 'booked' },
                    { title: 'In attesa', value: 'pending' },
                    { title: 'Confermato', value: 'confirmed' },
                    { title: 'Annullato', value: 'cancelled' },
                ],
            },
            validation: Rule => Rule.required(),
        }
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'room.name',
        },
    },
};