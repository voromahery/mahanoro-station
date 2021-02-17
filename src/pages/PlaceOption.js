import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { PlaceOption } from "../components";

export default function PlaceOptionContainer() {
  const places = useSelector((state) => state.places);

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
