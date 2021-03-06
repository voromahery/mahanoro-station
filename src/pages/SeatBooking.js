import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import { Booking } from "../components";
import { displayModal } from "../actions/modal";
import { addBooking, cancelBooking } from "../actions/booking";
import ModalContainer from "../containers/Modal";
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
    id: bookingFind.departureTime,
    destination: bookingFind.destination,
    price: bookingFind.price
  };

  // Fixed the number of the data in the userBooks
  userBooks.push(bookingInfo);
  userBooks.length = bookingPlace.length;
  console.log(userBooks);
  return (
    <Booking>
      {openModal && <ModalContainer />}
      <Booking.Title>
        Book a seat to:<span>{bookingFind.destination}</span>
      </Booking.Title>
      <Booking.Content>

        <Booking.Wrapper>
          <Booking.Heading>Pick a seat</Booking.Heading>
          <Booking.Seats>
            {bookingFind.seats.map((seat, index) => {
              // Changing the appearance of the chairsz
              function booked() {
                if (bookingPlace.some((book) => book.id === seat.id)) {
                  return (
                    <Booking.Image
                      src={selectedSeat}
                      alt=""
                      id={seat.id}
                      style={{ cursor: "pointer" }}
                      onClick={() => dispatch(cancelBooking(seat.id))}
                    />
                  );
                } else {
                  return (
                    <Booking.Image
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
                <Booking.ImageList key={index}>
                  {seat.isAvailable ? (
                    booked()
                  ) : (
                    <img
                      src={redSeat}
                      style={{ cursor: "not-allowed" }}
                      alt=""
                    />
                  )}
                </Booking.ImageList>
              );
            })}
          </Booking.Seats>
          </Booking.Wrapper>

          <Booking.Wrapper>  
            <Booking.Heading>Trip informations:</Booking.Heading>
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
      </Booking.Content>
    </Booking>
  );
}
