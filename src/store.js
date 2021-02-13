import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import state from "./user";
import rootReducer from "./reducer/index";

const store = createStore(rootReducer, state, applyMiddleware(thunk));

export default store;
