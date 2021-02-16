import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import { Account } from "../components";
import { user } from "../actions/user";

export default function AccountContainer() {
  const dispatch = useDispatch();

  const userBooks = useSelector((state) => state.user.bookedPlace);
  const defaultUser = useSelector((state) => state.user);

  // Get the firstName, lastName and phone
  const [firstName, setFirstName] = useState(defaultUser.firstName);
  const [lastName, setLastName] = useState(defaultUser.lastName);
  const [phone, setPhone] = useState(defaultUser.phone);
  // const price = booking.length;

  // Edit user identity
  function updateUser(e) {
    e.preventDefault();
    const changeUser = {
      firstName,
      lastName,
      phone,
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
