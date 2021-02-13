import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SeatBooking() {
  const allData = useSelector((state) => state.data);
  const { bookingId } = useParams();
  const booking = allData.find((data) => data.id === Number(bookingId));
  return (
    <>
      <h1>Book a seat to:{booking.id}</h1>
    </>
  );
}
