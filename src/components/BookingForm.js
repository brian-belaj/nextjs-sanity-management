// src/components/BookingForm.js
'use client'; // Necessario per utilizzare useState e useEffect in Next.js 13+

import { useState } from 'react';
import client from '../lib/sanity';
import { useForm, ValidationError } from "@formspree/react";

const BookingForm = ({ roomId }) => {
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const bookingData = {
      _type: 'booking',
      name: guestName, // Nome
      email: guestEmail, // Email
      phone: guestPhone, // Telefono
      checkIn: checkIn, // Check-in
      checkOut: checkOut, // Check-out
      room: {
        _type: 'reference',
        _ref: roomId, // Camera
      },
      status: 'pending', // Stato iniziale della prenotazione
    };

    try {
      const result = await client.create(bookingData); // Invia i dati a Sanity
      console.log('Prenotazione creata con successo:', result);
      alert('Prenotazione effettuata con successo!');
    } catch (err) {
      console.error('Errore durante la creazione della prenotazione:', err);
      setError('Si è verificato un errore. Riprova.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Nome"
        value={guestName}
        onChange={(e) => setGuestName(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={guestEmail}
        onChange={(e) => setGuestEmail(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="tel"
        placeholder="Telefono"
        value={guestPhone}
        onChange={(e) => setGuestPhone(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="date"
        placeholder="Check-In"
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="date"
        placeholder="Check-Out"
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        {loading ? 'Invio in corso...' : 'Prenota'}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default BookingForm;
