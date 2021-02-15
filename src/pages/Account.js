import React from "react";
import { Account } from "../components";
import { useSelector } from "react-redux";

export default function AccountContainer() {
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const phone = useSelector((state) => state.user.phone);
  function updateUser(e) {
    e.preventDefault();
  }
  return (
    <Account>
      <Account.Heading>
        My account <Account.Span></Account.Span>
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
          {booking.map((book, index) => (
            <div>
              <div key={index}>{book}</div>
            </div>
          ))}
  
          {/* <Account.Text>Destination</Account.Text>
          <Account.Text>Date, time</Account.Text>
        </Account.Wrapper>
        <Account.Wrapper>
          <Account.Text>Number of seats</Account.Text> */}
          <Account.Text>Price</Account.Text>
        </Account.Wrapper>
        <Account.Cancel>Cancel</Account.Cancel>
      </Account>
    </Account>
  );
}
