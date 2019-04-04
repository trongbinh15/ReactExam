import { combineReducers } from "redux";
import userReducer from "./userReducer";
import apiStatusReducer from "./apiStatusReducer";

const rootReducers = combineReducers({ userReducer, apiStatusReducer });

export default rootReducers;
