import {
  UPDATE_NAME,
  UPDATE_EMAIL,
  UPDATE_PWD,
  LOAD_USERS_SUCCESS,
  BEGIN_LOAD_USER,
  BEGIN_CREATE_USER,
  CREATE_USER_SUCCESS,
  SET_CURRENT_USER,
  LOGIN_SUCCESS,
  LOGOUT
} from "./actionType";

import database from "../../firebase/firebase";

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

export function beginLoadUser() {
  return { type: BEGIN_LOAD_USER };
}

export function beginCreateUser() {
  return { type: BEGIN_CREATE_USER };
}

export function createUserSuccess() {
  return { type: CREATE_USER_SUCCESS };
}

export function loadUsers() {
  return function(dispatch) {
    dispatch(beginLoadUser());

    let users = null;

    database
      .ref("accounts")
      .once("value")
      .then(snapshot => {
        const expenses = [];
        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        users = expenses;
      });

    setTimeout(() => {
      dispatch(loadUserSuccess(users));
    }, 1500);
  };
}

export function createUser(newUser) {
  return function(dispatch) {
    dispatch(beginCreateUser());
    database.ref("accounts").push({
      email: newUser.email,
      password: newUser.password,
      name: newUser.name,
      createdAt: new Date()
    });
    setTimeout(() => {
      dispatch(createUserSuccess());
    }, 1500);
  };
}

export function setCurrentUser(curUser) {
  return function(dispatch) {
    dispatch({ type: SET_CURRENT_USER, payload: curUser });
    dispatch({ type: LOGIN_SUCCESS });
  };
}

export function logOut() {
  return function(dispatch) {
    dispatch({ type: LOGOUT });
  };
}
