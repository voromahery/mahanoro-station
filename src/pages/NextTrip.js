import React from "react";
import { Link } from "react-router-dom";

export default function NextTrip() {
  return (
    <>
      <h1>Next Trip</h1>
      <Link to="/booking">
        <button>Book a seat</button>
      </Link>
    </>
  );
}
