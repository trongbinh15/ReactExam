import initialState from "./initialState";
import {
  UPDATE_USER,
  UPDATE_NAME,
  UPDATE_EMAIL,
  UPDATE_PWD
} from "../actions/actionType";

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, state: action.payload };
    case UPDATE_NAME:
      return { ...state, username: action.payload };
    case UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case UPDATE_PWD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
}
