import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { GlobalStyles } from "./globalStyles";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles/>
      <Router>
        <App />
      </Router>
  </Provider>,
  document.getElementById("root")
);
