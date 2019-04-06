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



export default database;
