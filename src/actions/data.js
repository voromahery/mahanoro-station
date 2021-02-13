export function getData() {
  return async (dispatch) => {
    const regeneratorRunTime = "https://cors-anywhere.herokuapp.com/";
    const infoUrl = `https://gist.githubusercontent.com/Pinois/36bb5fbf9b6a686f0baf4006dd137bca/raw/a40d8b3f696a75f388db286d57bdd05a925fa0e7/trips.json`;
    const response = await fetch(`${infoUrl}`);
    const data = await response.json();
    dispatch({
      type: "GET_DATA",
      payload: data,
    });
  };
}
