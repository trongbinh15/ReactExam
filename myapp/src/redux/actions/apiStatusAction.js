import { BEGIN_API_CALL, LOAD_USERS_SUCCESS } from "./actionType";
import * as ToDoApi from "../../api/Todo";

export function beginApi() {
  return { type: BEGIN_API_CALL };
}

export function loadUserSuccess(users) {
  return { type: LOAD_USERS_SUCCESS, payload: users };
}

export function loadUsers() {
  return function(dispatch) {
    dispatch(beginApi());
    return ToDoApi.loadTodos()
      .then(users => {
        dispatch(loadUserSuccess, users);
      })
      .catch(error => {
        console.log(error);
      });
  };
}
