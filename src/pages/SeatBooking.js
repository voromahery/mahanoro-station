import React from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { useSelector, useDispatch } from "react-redux";
import { Booking } from "../components";
import { displayModal } from "../actions/modal";
import ModalContainer from "../containers/Modal";

export default function SeatBooking() {
  const allData = useSelector((state) => state.data);
  const { bookingId } = useParams();
  const booking = allData.find((data) => data.id === Number(bookingId));
  const filterSeat = booking.seats.filter((seat) => seat.isAvailable === true);
  const seats = ["🪑"];
  // seats.length = filterSeat.length;

  // Get the date
  const fullDate = new Date(booking.departureTime);
  const hour = fullDate.getHours();
  const minute = fullDate.getMinutes();
  const date = `${format(fullDate, "dd/MM/yyyy")}`;

  const openModal = useSelector((state) => state.displayModal);
  console.log(openModal);
  const dispatch = useDispatch();
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
                20000<Booking.Span>Ar</Booking.Span>/seat
              </Booking.Price>
            </Booking.Wrapper>
            <Booking.Button onClick={() => dispatch(displayModal(true))}>
              Book <Booking.ButtonSpan>2</Booking.ButtonSpan> seats
            </Booking.Button>
            <Booking.Total>Total: 40000 Ar</Booking.Total>
          </Booking.Wrapper>
        </Booking.Wrapper>
      </Booking.Wrapper>
    </Booking>
  );
}
