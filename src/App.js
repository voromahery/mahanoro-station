import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./containers/HeaderContainer";
import PlaceOptionContainer from "./pages/PlaceOption";
import NextTrip from "./pages/NextTrip";
import SeatBooking from "./pages/SeatBooking";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <PlaceOptionContainer />
        </Route>
        <Route exact path="/nextTrip/:place">
          <NextTrip />
        </Route>
        <Route exact path="/booking/:bookingId">
          <SeatBooking />
        </Route>
      </Switch>
    </>
  );
}
export default App;
