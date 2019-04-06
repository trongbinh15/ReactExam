import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyBhlu1ZZcJ8f1cv8ryG7sTDsrJrOrpm2mQ",
  authDomain: "trongbinh-16784.firebaseapp.com",
  databaseURL: "https://trongbinh-16784.firebaseio.com",
  projectId: "trongbinh-16784",
  storageBucket: "trongbinh-16784.appspot.com",
  messagingSenderId: "90124616776"
};
firebase.initializeApp(config);

const database = firebase.database();

export function Upload(email, pwd, name) {
  database.ref("accounts").push({
    email: email,
    password: pwd,
    name: name,
    createdAt: new Date()
  });
}

export function GetData() {
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

      return expenses;
    });
}

export default database;
