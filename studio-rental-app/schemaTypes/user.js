import {UserIcon} from '@sanity/icons'

export default {
    name: 'user',
    type: 'document',
    title: 'Utente',
    icon: UserIcon,
    fields: [
      {
        name: 'auth_id',
        type: 'string',
        title: 'ID Autenticazione',
        description: 'ID univoco fornito dal servizio di autenticazione esterno (es. Auth0, Firebase).',
        validation: Rule => Rule.required()
      },
      {
        name: 'name',
        type: 'string',
        title: 'Nome Utente',
        validation: Rule => Rule.required()
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
        validation: Rule => Rule.required().email()
      },
      {
        name: 'role',
        type: 'string',
        title: 'Ruolo',
        options: {
          list: [
            { title: 'Ospite', value: 'guest' },
            { title: 'Amministratore', value: 'admin' }
          ]
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'phone',
        type: 'string',
        title: 'Telefono',
        description: 'Numero di telefono dell\'utente (opzionale).'
      },
      {
        name: 'bookings',
        type: 'array',
        title: 'Prenotazioni',
        description: 'Prenotazioni effettuate da questo utente.',
        of: [{ type: 'reference', to: [{ type: 'booking' }] }]
      },
      {
        name: 'reviews',
        type: 'array',
        title: 'Recensioni',
        description: 'Recensioni lasciate da questo utente.',
        of: [{ type: 'reference', to: [{ type: 'review' }] }]
      }
    ]
  }