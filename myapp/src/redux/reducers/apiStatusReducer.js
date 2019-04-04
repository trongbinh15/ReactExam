import initialState from "./initialState";
import { BEGIN_API_CALL } from "../actions/actionType";

export default function apiStatusReducer(
  state = initialState.fetching,
  action
) {
  switch (action.type) {
    case BEGIN_API_CALL:
      return { ...state, fetching: true };
    default:
      return state;
  }
}
