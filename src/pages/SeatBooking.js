import React from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { useSelector, useDispatch } from "react-redux";
import { displayModal } from "../actions/modal";
import Modal from "../containers/Modal";

export default function SeatBooking() {
  const allData = useSelector((state) => state.data);
  const { bookingId } = useParams();
  const booking = allData.find((data) => data.id === Number(bookingId));
  const filterSeat = booking.seats.filter((seat) => seat.isAvailable === true);
  const seats = [
    "🪑",
    "🪑",
    "🪑",
    "🪑",
    "🪑",
    "🪑",
    "🪑",
    "🪑",
    "🪑",
    "🪑",
    "🪑",
    "🪑",
    "🪑",
    "🪑",
    "🪑",
    "🪑",
    "🪑",
    "🪑",
    "🪑",
    "🪑",
  ];
  seats.length = filterSeat.length;

  // Get the date
  const fullDate = new Date(booking.departureTime);
  const hour = fullDate.getHours();
  const minute = fullDate.getMinutes();
  const date = `${format(fullDate, "dd/MM/yyyy")}`;

  const openModal = useSelector((state) => state.displayModal);
  console.log(openModal);
  const dispatch = useDispatch();
  return (
    <>
      {openModal && <Modal />}
      <h1>
        Book a seat to:<span>{booking.destination}</span>
      </h1>
      <div>
        <div>
          <h3>Pick a seat</h3>
          <ul>
            {seats.map((seat, index) => (
              <li key={index}>{seat}</li>
            ))}
          </ul>
          <div>
            <h3>Trip informations:</h3>
            <ul>
              <li>
                Departure time: <span>{`${hour}:${minute}, ${date}`}</span>
              </li>
              <li>
                Driver: <span>{booking.driverName}</span>
              </li>
              <li>
                Driver's contact: <span>{booking.driverContact}</span>
              </li>
              <li>
                Estimated duration: <span>{booking.estimatedDuration}</span>
              </li>
              <li>
                Breaks: <span>{booking.breaks}</span>
              </li>
            </ul>
            <div>
              <div>
                20000<span>Ar</span>/seat
              </div>
            </div>
            <button onClick={() => dispatch(displayModal(true))}>
              Book <span>2</span> seats
            </button>
            <p>Total: 40000 Ar</p>
          </div>
        </div>
      </div>
    </>
  );
}
