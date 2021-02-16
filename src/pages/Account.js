import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import { Account } from "../components";
import { user } from "../actions/user";

export default function AccountContainer() {
  const dispatch = useDispatch();

  const userBooks = useSelector((state) => state.user.bookedPlace);
  const defaultUser = useSelector((state) => state.user);

  const filterTana1 = userBooks.filter(
    (data) => data.destination === "Antananarivo" && data.id === 1613570400
  );

  const filterTana2 = userBooks.filter(
    (data) => data.destination === "Antananarivo" && data.id === 1613397600
  );

  const filterVatomandry1 = userBooks.filter(
    (data) => data.destination === "Vatomandry" && data.id === 1613570400
  );

  const filterVatomandry2 = userBooks.filter(
    (data) => data.destination === "Vatomandry" && data.time === 1613397600
  );

  const filterMoramanga1 = userBooks.filter(
    (data) => data.destination === "Moramanga" && data.id === 1613570400
  );

  const filterMoramanga2 = userBooks.filter(
    (data) => data.destination === "Moramanga" && data.id === 1613397600
  );

  const filterToamasina1 = userBooks.filter(
    (data) => data.destination === "Toamasina" && data.id === 1613570400
  );

  const filterToamasina2 = userBooks.filter(
    (data) => data.destination === "Toamasina" && data.id === 1613397600
  );

  const tana1 = filterTana1.reduce((acc, val) => acc + val.price, 0);
  const tana2 = filterTana2.reduce((acc, val) => acc + val.price, 0);
  const toamasina1 = filterToamasina1.reduce((acc, val) => acc + val.price, 0);
  const toamasina2 = filterToamasina2.reduce((acc, val) => acc + val.price, 0);
  const moramanga1 = filterMoramanga1.reduce((acc, val) => acc + val.price, 0);
  const moramanga2 = filterMoramanga2.reduce((acc, val) => acc + val.price, 0);
  const vatomandry1 = filterVatomandry1.reduce(
    (acc, val) => acc + val.price,
    0
  );
  const vatomandry2 = filterVatomandry2.reduce(
    (acc, val) => acc + val.price,
    0
  );

  const allBookedPlace = [
    { item: filterTana1, destination: "Antananarivo", price: tana1 },
    { item: filterTana2, destination: "Antananarivo", price: tana2 },
    { item: filterToamasina1, destination: "Toamasina", price: toamasina1 },
    { item: filterToamasina2, destination: "Toamasina", price: toamasina2 },
    { item: filterMoramanga1, destination: "Moramanga", price: moramanga1 },
    { item: filterMoramanga2, destination: "moramanga", price: moramanga2 },
    { item: filterVatomandry1, destination: "Vatomandry", price: vatomandry1 },
    { item: filterVatomandry2, destination: "Vatomandry", price: vatomandry1 },
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
            // const fullDate = new Date(book.item.date);
            // const hour = fullDate.getHours();
            // const minute = fullDate.getMinutes();
            // const date = `${format(fullDate, "dd/MM/yyyy")}`;

            // console.log(data[0]);
            return (
              <div key={index} style={ { display: book.item.length === 0 && "none" }}>
                <Account.Text>{book.destination}</Account.Text>
                <Account.Text></Account.Text>
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
