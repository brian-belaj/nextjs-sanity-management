// src/app/rooms/RoomDetails.js
import BookingForm from '../../components/BookingForm';

const RoomDetails = ({ params }) => {
  const roomId = params.id; // Supponendo che l'ID della camera sia passato come parametro

  return (
    <div>
      <h1>Dettagli della Camera</h1>
      {/* Mostra i dettagli della camera qui */}
      <BookingForm roomId={roomId} />
    </div>
  );
};

export default RoomDetails;