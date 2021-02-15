function booking(state = [], action) {
  switch (action.type) {
    case "ADD_BOOKING":
      return [...state, action.payload];
    case "CANCEL_BOOKING":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

export default booking;
