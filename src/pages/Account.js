import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import { Account } from "../components";
import { user } from "../actions/user";

export default function AccountContainer() {
  const booking = useSelector((state) => state.booking);
  const defaultUser = useSelector((state) => state.user);
  const dispatch = useDispatch()

  const [firstName, setFirstName] = useState(defaultUser.firstName);
  const [lastName, setLastName] = useState(defaultUser.lastName);
  const [phone, setPhone] = useState(defaultUser.phone);

  const price = booking.length;
  function updateUser(e) {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form);
    const changeUser = {
      firstName,
      lastName,
      phone,
    };
    dispatch(user(changeUser));
    console.log(changeUser);
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
          {/* {booking.map((book, index) => {
            const fullDate = new Date(book.departureTime);
            const hour = fullDate.getHours();
            const minute = fullDate.getMinutes();
            const date = `${format(fullDate, "dd/MM/yyyy")}`;

            return (
              <div>
                <Account.Text>{book.destination}</Account.Text>
                <Account.Text>{`${date}, ${hour}:${minute}`}</Account.Text>
                <Account.Wrapper>
                  <Account.Text>{book.length} seats</Account.Text>
                  <Account.Text>{price} Ar</Account.Text>
                </Account.Wrapper>
                <Account.Cancel>Cancel</Account.Cancel>
              </div>
            );
          })} */}
        </Account.Wrapper>
      </Account>
    </Account>
  );
}
