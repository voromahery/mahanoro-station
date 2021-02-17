function user(state = null, action) {
// import bookedPlace from './cancelBooking';
  switch (action.type) {
    case "USER":
      return action.payload;
    case "CANCEL_BOOKING":
      const filterArr = state.bookedPlace.filter(
        (item) => item.id !== action.payload
      );
      return [...filterArr];

    default:
      return state;
  }
}

export default user;
