import React from "react";
import { Container, Heading, Paragraph, Close, Button } from "./styles/modal";

export default function Modal({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Modal.Heading = function ModalHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

Modal.Paragraph = function ModalParagraph({ children, ...restProps }) {
  return <Paragraph {...restProps}>{children}</Paragraph>;
};

Modal.Close = function ModalClose({ children, ...restProps }) {
  return <Close {...restProps}>{children}</Close>;
};

Modal.Button = function ModalButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
