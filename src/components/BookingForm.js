"use client";

import { useState } from "react";
import client from "../lib/sanity";

const BookingForm = ({ roomId }) => {
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const bookingData = {
      _type: "booking",
      name: guestName,
      email: guestEmail,
      phone: guestPhone,
      checkIn: checkIn,
      checkOut: checkOut,
      room: {
        _type: "reference",
        _ref: roomId,
      },
      status: "pending",
    };

    try {
      const result = await client.create(bookingData);
      console.log("Prenotazione creata con successo:", result);
      alert("Prenotazione effettuata con successo!");
    } catch (err) {
      console.error("Errore durante la creazione della prenotazione:", err);
      setError("Si è verificato un errore. Riprova.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Nome"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          required
          className="w-full p-3 border rounded placeholder-black"
        />
        <input
          type="email"
          placeholder="Email"
          value={guestEmail}
          onChange={(e) => setGuestEmail(e.target.value)}
          required
          className="w-full p-3 border rounded placeholder-black"
        />
        <input
          type="tel"
          placeholder="Telefono"
          value={guestPhone}
          onChange={(e) => setGuestPhone(e.target.value)}
          required
          className="w-full p-3 border rounded placeholder-black"
        />
        <input
    type="date"
    value={checkIn}
    onChange={(e) => setCheckIn(e.target.value)}
    required
    className="w-full p-2 border rounded mt-4"
  />
        <input
          type="date"
          placeholder="Check-Out"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          required
          className="w-full p-3 border rounded placeholder-black appearance-none"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
      >
        {loading ? "Invio in corso..." : "Prenota"}
      </button>
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
    </form>
  );
};

export default BookingForm;