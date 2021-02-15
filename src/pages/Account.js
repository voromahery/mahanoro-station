import React from "react";
import { Account } from "../components";

export default function AccountContainer() {
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
            <Account.Input type="text" />
          </Account.Label>
          <Account.Label>
            Last name
            <Account.Input type="text" />
          </Account.Label>
          <Account.Label>
            Phone number
            <Account.Input type="phone" />
          </Account.Label>
        </Account.Wrapper>
        <Account.Update>Update</Account.Update>
      </Account.Form>
      <Account>
        <Account.Title>My bookings:</Account.Title>
        <Account.Wrapper>
          <Account.Text>Destination</Account.Text>
          <Account.Text>Date, time</Account.Text>
        </Account.Wrapper>
        <Account.Wrapper>
          <Account.Text>Number of seats</Account.Text>
          <Account.Text>Price</Account.Text>
        </Account.Wrapper>
        <Account.Cancel>Cancel</Account.Cancel>
      </Account>
    </Account>
  );
}
