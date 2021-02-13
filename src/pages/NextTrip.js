import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export default function NextTrip() {
  const allData = useSelector((state) => state.data);
  const { place } = useParams();
  const dataFilter = allData.filter((data) => data.destination === place);
  return (
    <>
      <h1>Next Trip</h1>
      {dataFilter.map((data) => (
        <div key={data.id}>
          <h2>{data.departureTime}</h2>
          <Link to={`/booking/${data.id}`}>
            <button>Book a seat</button>
          </Link>
        </div>
      ))}
    </>
  );
}
