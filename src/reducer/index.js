import { combineReducers } from "redux";
import data from "./dataReducer";
import user from "./userReducer";
import displayModal from "./modalReducer";
import booking from "./bookingReducer";

const rootReducer = combineReducers({ data, user, displayModal, booking });
export default rootReducer;
