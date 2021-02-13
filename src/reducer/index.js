import { combineReducers } from "redux";
import data from "./dataReducer";
import user from "./userReducer";
import displayModal from "./modalReducer";

const rootReducer = combineReducers({ data, user, displayModal });
export default rootReducer;
