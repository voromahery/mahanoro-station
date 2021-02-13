import React from "react";
import {
  Container,
  Heading,
  List,
  ListItem,
  Button,
} from "./styles/placeOption";

export default function PlaceOption({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

PlaceOption.Heading = function PlaceOptionHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

PlaceOption.List = function PlaceOptionList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

PlaceOption.ListItem = function PlaceOptionListItem({
  children,
  ...restProps
}) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

PlaceOption.Button = function PlaceOptionButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
