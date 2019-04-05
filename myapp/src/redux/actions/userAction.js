import {
  UPDATE_NAME,
  UPDATE_EMAIL,
  UPDATE_PWD,
  LOAD_USERS_SUCCESS
} from "./actionType";
import { beginApi } from "./apiStatusAction";
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

export function loadUserSuccess(users) {
  return { type: LOAD_USERS_SUCCESS, payload: users };
}

export function loadUsers() {

  return function (dispatch) {
    dispatch(beginApi());
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        dispatch(loadUserSuccess(data));
      });
  };
}
