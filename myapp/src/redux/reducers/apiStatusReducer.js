import initialState from "./initialState";
import { BEGIN_API_CALL, COMPLETE_API_CALL } from "../actions/actionType";

export default function apiStatusReducer(state = initialState.apiCall, action) {
  switch (action.type) {
    case BEGIN_API_CALL:
      return true;
    case COMPLETE_API_CALL:
      return false;
    default:
      return state;
  }
}
