import React from "react";
import {
  Container,
  Seats,
  ListItem,
  Title,
  Info,
  Button,
  ButtonSpan,
  Total,
  Wrapper,
  Span,
  Price,
} from "./styles/booking";

export default function Booking({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Booking.Seats = function BookingSeats({ children, ...restProps }) {
  return <Seats {...restProps}>{children}</Seats>;
};

Booking.ListItem = function BookingListItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

Booking.Title = function BookingTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Booking.Info = function BookingInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};

Booking.Button = function BookingButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Booking.ButtonSpan = function BookingButtonSpan({ children, ...restProps }) {
  return <ButtonSpan {...restProps}>{children}</ButtonSpan>;
};

Booking.Button = function BookingButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Booking.Total = function BookingTotal({ children, ...restProps }) {
  return <Total {...restProps}>{children}</Total>;
};

Booking.Wrapper = function BookingWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Booking.Price = function BookingPrice({ children, ...restProps }) {
  return <Price {...restProps}>{children}</Price>;
};

Booking.Span = function BookingSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};
