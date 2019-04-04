import { UPDATE_NAME, UPDATE_EMAIL, UPDATE_PWD } from "./actionType";
import { beginApi, loadUserSuccess } from "./apiStatusAction";
import * as ToDoApi from "../../api/Todo";

export function updateName(name) {
  return { type: UPDATE_NAME, payload: name };
}

export function updateEmail(email) {
  return { type: UPDATE_EMAIL, payload: email };
}

export function updatePwd(pwd) {
  return { type: UPDATE_PWD, payload: pwd };
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
