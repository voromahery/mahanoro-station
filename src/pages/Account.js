import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import { Account } from "../components";
import { user } from "../actions/user";

export default function AccountContainer() {
  const dispatch = useDispatch();
  const userBooks = useSelector((state) => state.user.bookedPlace);
  const defaultUser = useSelector((state) => state.user);

  // Antananarivo data
  const filterTana1 = userBooks.filter((data) => data.destination === "Antananarivo" && data.id === 1613570400);
  const filterTana2 = userBooks.filter((data) => data.destination === "Antananarivo" && data.id === 1613397600);

  // Vatomandry data
  const filterVatomandry1 = userBooks.filter((data) => data.destination === "Vatomandry" && data.id === 1613570400);
  const filterVatomandry2 = userBooks.filter((data) => data.destination === "Vatomandry" && data.id === 1613397600);
  const filterVatomandry3 = userBooks.filter((data) => data.destination === "Vatomandry" && data.id === 1613829600);

  // Moramanga data 1613829600 1613397600
  const filterMoramanga1 = userBooks.filter((data) => data.destination === "Moramanga" && data.id === 1613570400);
  const filterMoramanga2 = userBooks.filter((data) => data.destination === "Moramanga" && data.id === 1613829600);
  const filterMoramanga3 = userBooks.filter((data) => data.destination === "Moramanga" && data.id === 1613743200);

  // Toamasina data
  const filterToamasina1 = userBooks.filter((data) => data.destination === "Toamasina" && data.id === 1613397600);

  // Calculate the price of the bookings
  const tana1 = filterTana1.reduce((acc, val) => acc + val.price, 0);
  const tana2 = filterTana2.reduce((acc, val) => acc + val.price, 0);
  const toamasina1 = filterToamasina1.reduce((acc, val) => acc + val.price, 0);
  const moramanga1 = filterMoramanga1.reduce((acc, val) => acc + val.price, 0);
  const moramanga2 = filterMoramanga2.reduce((acc, val) => acc + val.price, 0);
  const moramanga3 = filterMoramanga3.reduce((acc, val) => acc + val.price, 0);
  const vatomandry1 = filterVatomandry1.reduce((acc, val) => acc + val.price, 0);
  const vatomandry2 = filterVatomandry2.reduce((acc, val) => acc + val.price, 0);
  const vatomandry3 = filterVatomandry3.reduce((acc, val) => acc + val.price, 0);

  const allBookedPlace = [
    {
      item: filterTana1,
      destination: "Antananarivo",
      price: tana1,
      id: 1613570400,
    },
    {
      item: filterTana2,
      destination: "Antananarivo",
      price: tana2,
      id: 1613397600,
    },
    {
      item: filterToamasina1,
      destination: "Toamasina",
      price: toamasina1,
      id: 1613397600,
    },
    {
      item: filterMoramanga1,
      destination: "Moramanga",
      price: moramanga1,
      id: 1613570400,
    },
    {
      item: filterMoramanga2,
      destination: "Moramanga",
      price: moramanga2,
      id: 1613829600,
    },
    {
      item: filterMoramanga3,
      destination: "Moramanga",
      price: moramanga3,
      id: 1613743200,
    },
    {
      item: filterVatomandry1,
      destination: "Vatomandry",
      price: vatomandry1,
      id: 1613570400,
    },
    {
      item: filterVatomandry2,
      destination: "Vatomandry",
      price: vatomandry2,
      id: 1613397600,
    },
    {
      item: filterVatomandry3,
      destination: "Vatomandry",
      price: vatomandry3,
      id: 1613829600,
    },
  ];
  console.log(allBookedPlace);

  // Get the firstName, lastName and phone
  const [firstName, setFirstName] = useState(defaultUser.firstName);
  const [lastName, setLastName] = useState(defaultUser.lastName);
  const [phone, setPhone] = useState(defaultUser.phone);

  // Edit user identity
  function updateUser(e) {
    e.preventDefault();
    const changeUser = {
      firstName,
      lastName,
      phone,
      bookedPlace: userBooks,
    };

    dispatch(user(changeUser));
  }

  return (
    <Account>
      <Account.Heading>
        My account <Account.Span>{firstName}</Account.Span>
      </Account.Heading>
      <Account.Form onSubmit={updateUser}>
        <Account.Wrapper
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <Account.Label>
            First name
            <Account.Input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Account.Label>
          <Account.Label>
            Last name
            <Account.Input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Account.Label>
          <Account.Label>
            Phone number
            <Account.Input
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Account.Label>
        </Account.Wrapper>
        <Account.Update>Update</Account.Update>
      </Account.Form>
      <Account>
        <Account.Title>My bookings:</Account.Title>
        <Account.Wrapper>
          {allBookedPlace.map((book, index) => {
            const fullDate = new Date(book.id);
            const hour = fullDate.getHours();
            const minute = fullDate.getMinutes();
            const date = `${format(fullDate, "dd/MM/yyyy")}`;

            // console.log(data[0]);
            return (
              <div
                key={index}
                style={{ display: book.item.length === 0 && "none" }}
              >
                <Account.Text>{book.destination}</Account.Text>
                <Account.Text>{`${date}, ${hour}:${minute}`}</Account.Text>
                <Account.Wrapper>
                  <Account.Text>{book.item.length} seats</Account.Text>
                  <Account.Text>{book.price} Ar</Account.Text>
                </Account.Wrapper>
                <Account.Cancel>Cancel</Account.Cancel>
              </div>
            );
          })}
        </Account.Wrapper>
      </Account>
    </Account>
  );
}
