function booking(state = [], action) {
  switch (action.type) {
    case "ADD_BOOKING":
      return [...state, action.payload];
    case "CANCEL_BOOKING":
      const filterArr = state.filter((item) => item.id !== action.payload);
      console.log(filterArr, "FILTER");
      return filterArr;
    default:
      return state;
  }
}

export default booking;
