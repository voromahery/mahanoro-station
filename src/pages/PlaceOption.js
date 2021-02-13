import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PlaceOption() {
  const places = ["Antananarivo", "Toamasina", "Vatomandry", "Toamasina"];

  return (
    <>
      <h1>Where are you going?</h1>
      <ul>
        {places.map((place, index) => (
          <Link key={place[index]} to={`/nextTrip/${place}`}>
            <li>
              <button value={place}>{place}</button>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
