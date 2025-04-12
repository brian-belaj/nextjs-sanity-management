"use client";

import { useState } from "react";
import client from "../lib/sanity";

const BookingForm = ({ roomId }) => {
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
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
      alert("Prenotazione effettuata con successo!");
    } catch (err) {
      setError("Si è verificato un errore. Riprova.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md">
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
      <div className="flex space-x-2">
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          required
          className="w-1/2 p-2 border rounded"
        />
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          required
          className="w-1/2 p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        {loading ? "Invio..." : "Prenota"}
      </button>
      {error && <p className="text-red-500 text-center">{error}</p>}
    </form>
  );
};

export default BookingForm;