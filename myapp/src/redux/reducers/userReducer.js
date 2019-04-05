import initialState from "./initialState";
import {
  UPDATE_USER,
  UPDATE_NAME,
  UPDATE_EMAIL,
  UPDATE_PWD,
  LOAD_USERS_SUCCESS
} from "../actions/actionType";

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return action.user;
    case UPDATE_NAME:
      return { ...state, username: action.name };
    case UPDATE_EMAIL:
      return { ...state, email: action.email };
    case UPDATE_PWD:
      return { ...state, email: action.password };
    case LOAD_USERS_SUCCESS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}
