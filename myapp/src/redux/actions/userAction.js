import {
  UPDATE_NAME,
  UPDATE_EMAIL,
  UPDATE_PWD,
  LOAD_USERS_SUCCESS,
  BEGIN_LOAD_USER
} from "./actionType";




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
  return { type: BEGIN_LOAD_USER }
}

export function loadUsers() {

  return function (dispatch) {
    dispatch(beginLoadUser());

    const users = GetData();

    console.log(users);

    setTimeout(() => {
      dispatch(loadUserSuccess(GetData()));
    }, 1500);

    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then(response => response.json())
    //   .then(data => {
    //     setTimeout(() => {
    //       dispatch(loadUserSuccess(data));
    //     }, 1500);
    //   });
  };
}
