import { combineReducers } from "redux";
import data from "./dataReducer";
import user from "./userReducer";

const rootReducer = combineReducers({ data, user });
export default rootReducer;
