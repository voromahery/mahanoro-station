import React from "react";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export default function NextTrip() {
  const allData = useSelector((state) => state.data);
  const { place } = useParams();
  const dataFilter = allData.filter((data) => data.destination === place);

  return (
    <>
      <h1>
        Next trips to:<span>{dataFilter[0].destination}</span>
      </h1>
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
          <div key={data.id}>
            <div>
              <span>{day}</span>
              <span>{`${hour}:${minute}`}</span>
            </div>
            <div>
              <span>{date}</span>
              <div><span>{numberOfSeats}</span>{numberOfSeats > 0 ? "seats left": "seat left"}</div>
            </div>
            <Link to={`/booking/${data.id}`}>
              <button disabled={numberOfSeats === 0}>Book a seat</button>
            </Link>
          </div>
        );
      })}
    </>
  );
}
