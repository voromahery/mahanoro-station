import React from "react";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { NextTrip } from "../components";

export default function NextTripContainer() {
  const allData = useSelector((state) => state.data);
  const { place } = useParams();
  const dataFilter = allData.filter((data) => data.destination === place);

  return (
    <>
      <NextTrip.Header>
        Next trips to:<NextTrip.Place >{place}</NextTrip.Place>
      </NextTrip.Header>
      {dataFilter.map((data) => {
        // Get the number of the available seats
        const seats = data.seats.filter((seat) => seat.isAvailable === true);
        const numberOfSeats = seats.length;

        // Get the date format
        const fullDate = new Date(data.departureTime);
        const day = fullDate.toLocaleString("en-us", { weekday: "long" });
        const hour = fullDate.getHours();
        const minute = fullDate.getMinutes();
        const date = `${format(fullDate, "dd/MM/yyyy")}`;
        return (
          <NextTrip key={data.id}>
            <NextTrip.Wrapper>
              <NextTrip.Date>{day}</NextTrip.Date><br/>
              <NextTrip.Date>{`${hour}:${minute}`}</NextTrip.Date>
            </NextTrip.Wrapper>
            <NextTrip.Wrapper>
              <NextTrip.Date>{date}</NextTrip.Date>
              <NextTrip.Wrapper>
                <NextTrip.Seat>{numberOfSeats}</NextTrip.Seat>
                {numberOfSeats > 0 ? "seats left" : "seat left"}
              </NextTrip.Wrapper>
            </NextTrip.Wrapper>
            <Link to={`/booking/${data.id}`}>
              <NextTrip.Button disabled={numberOfSeats === 0}>Book a seat</NextTrip.Button>
            </Link>
          </NextTrip>
        );
      })}
    </>
  );
}
