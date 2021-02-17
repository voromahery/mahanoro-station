import React from "react";
import { Switch, Route } from "react-router-dom";
import Headers from "./containers/HeaderContainer";
import PlaceOptionContainer from "./pages/PlaceOption";
import NextTripContainer from "./pages/NextTrip";
import SeatBooking from "./pages/SeatBooking";
import AccountContainer from "./pages/Account";

function App() {
  return (
    <>
      <Headers />
      <Switch>
        <Route exact path="/">
          <PlaceOptionContainer />
        </Route>
        <Route exact path="/nextTrip/:place">
          <NextTripContainer />
        </Route>
        <Route exact path="/booking/:bookingId">
          <SeatBooking />
        </Route>
        <Route exact path="/account">
          <AccountContainer />
        </Route>
      </Switch>
    </>
  );
}
export default App;
