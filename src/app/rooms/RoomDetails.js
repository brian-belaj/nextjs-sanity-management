// src/app/rooms/RoomDetails.js
import BookingForm from '../../components/BookingForm';

const RoomDetails = ({ params }) => {
  const roomId = params.id;

  return (
    <div>
      <h1>Room details</h1>
      <BookingForm roomId={roomId} />
    </div>
  );
};

export default RoomDetails;