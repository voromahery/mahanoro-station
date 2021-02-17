import React from "react";
import {
  Container,
  Heading,
  Input,
  Update,
  Cancel,
  Label,
  Title,
  Wrapper,
  Span,
  Form,
  Text,
  BookedPlace
} from "./styles/account";

export default function Account({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Account.Heading = function AccountHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

Account.BookedPlace = function AccountBookedPlace({ children, ...restProps }) {
  return <BookedPlace {...restProps}>{children}</BookedPlace>;
};

Account.Form = function AccountForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};

Account.Span = function AccountSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};

Account.Text = function AccountText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Account.Image = function AccountImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Account.Input = function AccountInput({ children, ...restProps }) {
  return <Input {...restProps} />;
};

Account.Update = function AccountUpdate({ children, ...restProps }) {
  return <Update {...restProps}>{children}</Update>;
};

Account.Cancel = function AccountCancel({ children, ...restProps }) {
  return <Cancel {...restProps}>{children}</Cancel>;
};

Account.Label = function AccountLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

Account.Title = function AccountTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Account.Wrapper = function AccountWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
