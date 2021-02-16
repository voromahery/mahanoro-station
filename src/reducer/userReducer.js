function user(state = null, action) {
  switch (action.type) {
    case "USER":
      return action.payload;
    // case "CHANGE_FIRSTNAME":
    //   return { firstName: action.payload };
    // case "CHANGE_LASTNAME":
    //   return { lastName: action.payload };
    // case "CHANGE_NUMBER":
    //   return { phone: action.payload };
    default:
      return state;
  }
}

export default user;
