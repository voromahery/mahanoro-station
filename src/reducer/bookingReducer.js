function booking(state = [], action) {
  switch (action.type) {
    case "ADD_BOOKING":
      return [...state, action.payload];
    // case "CANCEL_BOOKING":
    //   console.log(state.user);
    //   const filterArr = state.filter((item) => item.id !== action.payload);
    //   return [...filterArr];
    default:
      return state;
  }
}

export default booking;
