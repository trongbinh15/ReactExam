import React from "react";
export function loadTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    });
}
