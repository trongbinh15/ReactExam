import initialState from "./initialState";
import { BEGIN_API_CALL, LOAD_USERS_SUCCESS } from "../actions/actionType";

export default function apiStatusReducer(
  state = { fetch: initialState.fetching, users: initialState.users },
  action
) {
  switch (action.type) {
    case BEGIN_API_CALL:
      return { ...state, fetching: true };
    case LOAD_USERS_SUCCESS:
      return { ...state, fetching: false, users: action.payload };
    default:
      return state;
  }
}
