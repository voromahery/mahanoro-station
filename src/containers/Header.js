import React, { useEffect } from "react";

export default function Header({ getData, data }) {
  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return <h1>Mahanoro Station</h1>;
}
