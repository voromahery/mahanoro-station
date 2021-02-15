import React from "react";
import { Container, Heading, Account } from "./styles/header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Heading = function HeaderHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

Header.Account = function HeaderAccount({ children, ...restProps }) {
  return <Account {...restProps}>{children}</Account>;
};
