import {StarFilledIcon} from '@sanity/icons'

export default {
    name: 'review',
    title: 'Recensione',
    type: 'document',
    icon: StarFilledIcon,
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
        name: 'rating',
        title: 'Voto',
        type: 'number',
        validation: Rule => Rule.required().min(1).max(5),
        },
        {
        name: 'comment',
        title: 'Commento',
        type: 'text',
        validation: Rule => Rule.required(),
        },
        {
        name: 'room',
        title: 'Camera',
        type: 'reference',
        to: { type: 'room' },
        validation: Rule => Rule.required(),
        },
    ],
    preview: {
        select: {
        title: 'name',
        subtitle: 'room.name',
        },
    },
}