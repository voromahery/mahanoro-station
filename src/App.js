import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./containers/HeaderContainer";
import PlaceOption from "./pages/PlaceOption";
import NextTrip from './pages/NextTrip';
import SeatBooking from './pages/SeatBooking';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <PlaceOption />
        </Route>
        <Route exact path="/nextTrip">
          <NextTrip />
        </Route>
        <Route exact path="/booking">
          <SeatBooking />
        </Route>
      </Switch>
    </>
  );
}
export default App;
