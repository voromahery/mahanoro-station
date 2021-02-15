import React from "react";
import { format } from "date-fns";
import { Account } from "../components";
import { useSelector } from "react-redux";

export default function AccountContainer() {
  const booking = useSelector((state) => state.booking);
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const phone = useSelector((state) => state.user.phone);
  const price = booking.length;
  function updateUser(e) {
    e.preventDefault();
  }
  return (
    <Account>
      <Account.Heading>
        My account <Account.Span>{firstName}</Account.Span>
      </Account.Heading>
      <Account.Form>
        <Account.Wrapper
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <Account.Label>
            First name
            <Account.Input
              type="text"
              value={firstName}
              onChange={(e) => e.target.value}
            />
          </Account.Label>
          <Account.Label>
            Last name
            <Account.Input
              type="text"
              value={lastName}
              onChange={(e) => e.target.value}
            />
          </Account.Label>
          <Account.Label>
            Phone number
            <Account.Input
              type="phone"
              value={phone}
              onChange={(e) => e.target.value}
            />
          </Account.Label>
        </Account.Wrapper>
        <Account.Update onSubmit={updateUser}>Update</Account.Update>
      </Account.Form>
      <Account>
        <Account.Title>My bookings:</Account.Title>
        <Account.Wrapper>
          {booking.map((book, index) => {
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
          })}
        </Account.Wrapper>
      </Account>
    </Account>
  );
}
