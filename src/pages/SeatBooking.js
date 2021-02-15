import React from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { useSelector, useDispatch } from "react-redux";
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
  const bookingFind = allData.find((data) => data.id === Number(bookingId));
  const bookingPlace = useSelector((state) => state.booking);
  const price = bookingPlace.length * bookingFind.price;

  // let bookingObj = {
  //   time: bookingFind.departureTime,
  //   id: bookingFind.departureTime,
  //   place: bookingFind.destination,
  // };

  // bookingPlace.push(bookingObj);
  console.log(bookingPlace);

  // Get the date
  const fullDate = new Date(bookingFind.departureTime);
  const hour = fullDate.getHours();
  const minute = fullDate.getMinutes();
  const date = `${format(fullDate, "dd/MM/yyyy")}`;
  const openModal = useSelector((state) => state.displayModal);
  const dispatch = useDispatch();

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
              // Changing the appearance of the chairs
              function booked() {
                if (bookingPlace.some((book) => book.id === seat.id && bookingFind.id)) {
                  return (
                    <img
                      src={selectedSeat}
                      className="add-cart"
                      alt=""
                      id={seat.id}
                      onClick={() => dispatch(cancelBooking(seat.id))}
                    />
                  );
                } else {
                  return (
                    <img
                      src={redSeat}
                      className="add-cart"
                      alt=""
                      id={seat.id}
                      onClick={() => dispatch(addBooking(seat))}
                    />
                  );
                }
              }

              return (
                <Booking.ListItem
                  key={index}
                  style={{
                    opacity: seat.isAvailable ? "1" : "0",
                  }}
                >
                  {booked()}
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
              <Booking.ButtonSpan>
                {bookingPlace.length}
              </Booking.ButtonSpan>{" "}
              seats
            </Booking.Button>
            <Booking.Total>Total: {price} Ar</Booking.Total>
          </Booking.Wrapper>
        </Booking.Wrapper>
      </Booking.Wrapper>
    </Booking>
  );
}
