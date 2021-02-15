export function addBooking(seat) {
  return {
    type: "ADD_BOOKING",
    payload: seat,
  };
}
