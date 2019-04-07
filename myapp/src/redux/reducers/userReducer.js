import initialState from "./initialState";
import {
  UPDATE_USER,
  UPDATE_NAME,
  UPDATE_EMAIL,
  UPDATE_PWD,
  LOAD_USERS_SUCCESS,
  BEGIN_LOAD_USER,
  BEGIN_CREATE_USER,
  CREATE_USER_SUCCESS,
  SET_CURRENT_USER
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
    case BEGIN_LOAD_USER:
      return { ...state, fetching: true };
    case LOAD_USERS_SUCCESS:
      return { ...state, users: action.payload, fetching: false };
    case BEGIN_CREATE_USER:
      return { ...state, creating: true };
    case CREATE_USER_SUCCESS:
      return { ...state, creating: false };
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
}
