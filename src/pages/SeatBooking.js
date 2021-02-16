import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import { Booking } from "../components";
import { displayModal } from "../actions/modal";
import ModalContainer from "../containers/Modal";
import { addBooking, cancelBooking } from "../actions/booking";
import redSeat from "../icons/redSeat.svg";
import selectedSeat from "../icons/selectedSeat.svg";
import whiteSeat from "../icons/whiteSeat.svg";

export default function SeatBooking() {
  const allData = useSelector((state) => state.data);
  const { bookingId } = useParams();
  const dispatch = useDispatch();
  const bookingFind = allData.find((data) => data.id === Number(bookingId));
  
  // Get the date
  const fullDate = new Date(bookingFind.departureTime);
  const hour = fullDate.getHours();
  const minute = fullDate.getMinutes();
  const date = `${format(fullDate, "dd/MM/yyyy")}`;
  const openModal = useSelector((state) => state.displayModal);

  const bookingPlace = useSelector((state) => state.booking);
  const price = bookingPlace.length * bookingFind.price;
  const userBooks = useSelector((state) => state.user.bookedPlace);

  // Adding data to the userdata
  const bookingInfo = {
    date: bookingFind.departureTime,
    time: bookingFind.departureTime,
    destination: bookingFind.destination,
    numberOfSeats: bookingPlace.length,
  };
  
  userBooks.push(bookingInfo);
  userBooks.length = bookingPlace.length;
  console.log(userBooks);
  return (
    <Booking>
      {openModal && <ModalContainer />}
      <Booking.Title>
        Book a seat to:<span>{bookingFind.destination}</span>
      </Booking.Title>
      <Booking.Wrapper>
        <Booking.Wrapper>
          <Booking.Title>Pick a seat</Booking.Title>
          <Booking.Seats>
            {bookingFind.seats.map((seat, index) => {
              // Changing the appearance of the chairsz
              function booked() {
                if (bookingPlace.some((book) => book.id === seat.id)) {
                  return (
                    <img
                      src={selectedSeat}
                      alt=""
                      id={seat.id}
                      style={{ cursor: "pointer" }}
                      onClick={() => dispatch(cancelBooking(seat.id))}
                    />
                  );
                } else {
                  return (
                    <img
                      src={whiteSeat}
                      alt=""
                      id={seat.id}
                      style={{ cursor: "pointer" }}
                      onClick={() => dispatch(addBooking(seat))}
                    />
                  );
                }
              }

              return (
                <Booking.ListItem key={index}>
                  {seat.isAvailable ? (
                    booked()
                  ) : (
                    <img
                      src={redSeat}
                      style={{ cursor: "not-allowed" }}
                      alt=""
                    />
                  )}
                </Booking.ListItem>
              );
            })}
          </Booking.Seats>
          <Booking.Wrapper>
            <Booking.Title>Trip informations:</Booking.Title>
            <Booking.Info>
              <Booking.ListItem>
                Departure time:
                <Booking.Span>{`${hour}:${minute}, ${date}`}</Booking.Span>
              </Booking.ListItem>
              <Booking.ListItem>
                Driver: <Booking.Span>{bookingFind.driverName}</Booking.Span>
              </Booking.ListItem>
              <Booking.ListItem>
                Driver's contact:
                <Booking.Span>{bookingFind.driverContact}</Booking.Span>
              </Booking.ListItem>
              <Booking.ListItem>
                Estimated duration:
                <Booking.Span>{bookingFind.estimatedDuration}</Booking.Span>
              </Booking.ListItem>
              <Booking.ListItem>
                Breaks: <Booking.Span>{bookingFind.breaks}</Booking.Span>
              </Booking.ListItem>
            </Booking.Info>
            <Booking.Wrapper>
              <Booking.Price>
                {bookingFind.price}
                <Booking.Span>Ar</Booking.Span>/seat
              </Booking.Price>
            </Booking.Wrapper>
            <Booking.Button onClick={() => dispatch(displayModal(true))}>
              Book
              <Booking.ButtonSpan> {bookingPlace.length} </Booking.ButtonSpan>
              seats
            </Booking.Button>
            <Booking.Total>Total: {price} Ar</Booking.Total>
          </Booking.Wrapper>
        </Booking.Wrapper>
      </Booking.Wrapper>
    </Booking>
  );
}
