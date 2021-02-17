import React from "react";
 import {
   Container,
   Date,
   Wrapper,
   Button,
   Seat,
   Place,
   Header
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

NextTrip.Header = function NextTripHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

NextTrip.Place = function NextTripPlace({ children, ...restProps }) {
  return <Place {...restProps}>{children}</Place>;
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