import React from "react";
import { useDispatch } from "react-redux";
import { displayModal } from "../actions/modal";

export default function Modal() {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(displayModal(false))}>CLEAR</button>
      <h1>Booking comfirmed!</h1>
      <p>
        Thank you for trusting our services. Your booking has been added to your
        account. You can review it there.
      </p>
      <button>Check your account</button>
    </>
  );
}
