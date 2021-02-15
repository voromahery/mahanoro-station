function booking(state = [], action) {
  switch (action.type) {
    case "ADD_BOOKING":
      return [...state, action.payload];
    default:
      return state;
  }
}

export default booking;