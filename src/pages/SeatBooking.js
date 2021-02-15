import React from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { useSelector, useDispatch } from "react-redux";
import { Booking } from "../components";
import { displayModal } from "../actions/modal";
import ModalContainer from "../containers/Modal";
import { addBooking, cancelBooking } from "../actions/booking";
import redSeat from "../icons/redSeat.svg";
// import selectedSeat from "../icons/selectedSeat.svg";
// import whiteSeat from "../icons/whiteSeat.svg";

export default function SeatBooking() {
  const allData = useSelector((state) => state.data);
  const { bookingId } = useParams();
  const booking = allData.find((data) => data.id === Number(bookingId));
  const bookingPlace = useSelector((state) => state.booking);
  const price = bookingPlace.length * booking.price;
  const seats = ["🪑"];
  // Get the date
  const fullDate = new Date(booking.departureTime);
  const hour = fullDate.getHours();
  const minute = fullDate.getMinutes();
  const date = `${format(fullDate, "dd/MM/yyyy")}`;
  const openModal = useSelector((state) => state.displayModal);
  const dispatch = useDispatch();

  // function booked() {
  //   if (bookingPlace.some((book) => book.id === song.id)) {
  //     return (
  //       <img
  //         src={addCartIcon}
  //         className="add-cart"
  //         alt=""
  //         id={song.id}
  //         onClick={() => dispatch(cancelBooking(song.id))}
  //       />
  //     );
  //   } else {
  //     return (
  //       <img
  //         src={cartIcon}
  //         className="add-cart"
  //         alt=""
  //         id={song.id}
  //         onClick={() => dispatch(addBooking(song))}
  //       />
  //     );
  //   }
  // }
  return (
    <Booking>
      {openModal && <ModalContainer />}
      <Booking.Title>
        Book a seat to:<span>{booking.destination}</span>
      </Booking.Title>
      <Booking.Wrapper>
        <Booking.Wrapper>
          <Booking.Title>Pick a seat</Booking.Title>
          <Booking.Seats>
            {booking.seats.map((seat, index) => (
              <Booking.ListItem
                onClick={() => dispatch(addBooking(seat.id))}
                key={index}
                style={{
                  opacity: seat.isAvailable ? "1" : "0",
                }}
              >
                {seats}
              </Booking.ListItem>
            ))}
          </Booking.Seats>
          <Booking.Wrapper>
            <Booking.Title>Trip informations:</Booking.Title>
            <Booking.Info>
              <Booking.ListItem>
                Departure time:
                <Booking.Span>{`${hour}:${minute}, ${date}`}</Booking.Span>
              </Booking.ListItem>
              <Booking.ListItem>
                Driver: <Booking.Span>{booking.driverName}</Booking.Span>
              </Booking.ListItem>
              <Booking.ListItem>
                Driver's contact:
                <Booking.Span>{booking.driverContact}</Booking.Span>
              </Booking.ListItem>
              <Booking.ListItem>
                Estimated duration:
                <Booking.Span>{booking.estimatedDuration}</Booking.Span>
              </Booking.ListItem>
              <Booking.ListItem>
                Breaks: <Booking.Span>{booking.breaks}</Booking.Span>
              </Booking.ListItem>
            </Booking.Info>
            <Booking.Wrapper>
              <Booking.Price>
                {booking.price}
                <Booking.Span>Ar</Booking.Span>/seat
              </Booking.Price>
            </Booking.Wrapper>
            <Booking.Button onClick={() => dispatch(displayModal(true))}>
              Book{" "}
              <Booking.ButtonSpan>{bookingPlace.length}</Booking.ButtonSpan>{" "}
              seats
            </Booking.Button>
            <Booking.Total>Total: {price} Ar</Booking.Total>
          </Booking.Wrapper>
        </Booking.Wrapper>
      </Booking.Wrapper>
    </Booking>
  );
}
