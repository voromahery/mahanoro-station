function user(state = null, action) {
// import bookedPlace from './cancelBooking';
  switch (action.type) {
    case "USER":
      return action.payload;
    default:
      return state;
  }
}

export default user;
