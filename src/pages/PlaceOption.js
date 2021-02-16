import React from "react";
import { Link } from "react-router-dom";
import { PlaceOption } from "../components";

export default function PlaceOptionContainer() {
  const places = ["Antananarivo", "Moramanga", "Vatomandry", "Toamasina"];

  return (
    <PlaceOption>
      <PlaceOption.Heading>Where are you going?</PlaceOption.Heading>
      <PlaceOption.List>
        {places.map((place, index) => (
          <Link key={place[index]} to={`/nextTrip/${place}`}>
            <PlaceOption.ListItem>
              <PlaceOption.Button value={place}>{place}</PlaceOption.Button>
            </PlaceOption.ListItem>
          </Link>
        ))}
      </PlaceOption.List>
    </PlaceOption>
  );
}
