export function addBooking(seat) {
  return {
    type: "ADD_BOOKING",
    payload: seat,
  };
}

export function cancelBooking(seat) {
  return {
    type: "CANCEL_BOOKING",
    payload: seat,
  };
}
