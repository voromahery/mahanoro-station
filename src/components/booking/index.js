import React from "react";
import { Container, List, ListItem } from "./styles/booking";

export default function Booking({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Booking.List = function BookingList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Booking.ListItem = function BookingListItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};
