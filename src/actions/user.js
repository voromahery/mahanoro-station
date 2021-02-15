export function user(user) {
  return {
    type: "USER",
    payload: user,
  };
}

export function firstName(firstname) {
  return {
    type: "CHANGE_FIRSTNAME",
    payload: firstname,
  };
}

export function lastName(lastname) {
  return {
    type: "CHANGE_LASTNAME",
    payload: lastname,
  };
}

export function phone(number) {
  return {
    type: "CHANGE_NUMBER",
    payload: number,
  };
}
