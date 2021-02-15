import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components";

export default function Headers({ getData, data }) {
  useEffect(() => {
    getData();
  }, []);

  return (
    <Header>
      <Link to="/">
        <Header.Heading>Mahanoro Station</Header.Heading>
      </Link>
      <Link to="/account">
        <Header.Account>My account</Header.Account>
      </Link>
    </Header>
  );
}
