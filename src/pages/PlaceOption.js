import React from "react";
import { Link } from "react-router-dom";

export default function PlaceOption() {
  return (
    <>
      <h1>MAIN PAGE</h1>
      <ul>
        <li>
          <Link to="nextTrip">
            <button value="Antananarivo">Antananarivo</button>
          </Link>
        </li>
        <li>
          <Link to="nextTrip">
            <button value="Toamasina">Toamasina</button>
          </Link>
        </li>
        <li>
          <Link to="nextTrip">
            <button value="Vatomandry">Vatomandry</button>
          </Link>
        </li>
        <li>
          <Link to="nextTrip">
            <button value="Moramanga">Moramanga</button>
          </Link>
        </li>
      </ul>
    </>
  );
}
