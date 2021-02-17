import React from "react";
 import {
   Container,
   Date,
   Wrapper,
   Button,
   Seat
 } from "./styles/nextTrip";

export default function NextTrip({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

NextTrip.Date = function NextTripDate({ children, ...restProps }) {
  return <Date {...restProps}>{children}</Date>;
};

NextTrip.Seat = function NextTripSeat({ children, ...restProps }) {
  return <Seat {...restProps}>{children}</Seat>;
};

NextTrip.Wrapper = function NextTripWrapper({
  children,
  ...restProps
}) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

NextTrip.Button = function NextTripButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};